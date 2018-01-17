(ns fool.routes.services.ml
  (:require [ring.util.http-response :as response]
            [fool.routes.services.api :as api]
            [clojure.tools.logging :as log]
            [fool.routes.services.tsdata :as tsdata]
            [clj-arima.arima :as arima]
            [clj-arima.util.difference :as difference]
            [clj-arima.test.adf :as adf]
            [clj-arima.util :as arima-util]
            [clj-time.core :as t]
            [clj-time.coerce :as coerce]
            [fool.db.core :as db]
            [clojure.data.json :as json]
            [com.chartbeat.opentsdb.core :as tsdb]
            [clj-arima.util.difference :as diff]
            [clojure.core.matrix.stats :as stats]
            [clj-arima.util :as util]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; NOTICE :  Data shold be [oldest .... latest]
;;
;; Hint
;;
;; (def t
;;   (let [ts (tsdata/get-tsdb "NIKKEI/INDEX" {"type" "close-price"}
;;                             1482656638107
;;                             1516120938164)]
;;     ts))
;; (str t)
;; (sort-by first
;;          (map (fn [[k v]]
;;                 [(* 1000 (Long/valueOf k)) v]) t))
;; (coerce/from-long (first (first t)))
;; first small = older : last big = later
;; (tsdata/send-data! "8zvcussLPAzz7xbdisQb" 
;;                    {:name "NIKKEI/INDEX"
;;    ster-status                 :start_date (clj-time.core/date-time 2017 1 1)
;;                     :end_date (clj-time.core/now)})
;; (t/in-days (t/interval (t/date-time 2018 1 1) (t/now)))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def freq {:week 7
           :year 365
           :day 1})

(defn get-diff [diff data]
  (if-let  [res (reverse (difference/difference diff (reverse data)))]
    res
    "Exception Raised"))

(defn get-adf [data diff adf]
  (if-let [res (adf/stationary-adftest data diff adf)]
    res
    "Exception Raised"))

(defn get-acf [diff acf-]
  (if-let [res (take (if (< 20 acf-) 20 acf-) (util/acf diff))]
    {:val res
     :threshold (util/acf-pacf-line diff)}
    "Exception Raised"))


(defn get-pacf [diff pacf-]
  (if-let [res (take (if (< 20 pacf-) 20 pacf-) (util/pacf diff))]
    {:val res
     :threshold (util/acf-pacf-line diff)}
    "Exception Raised"))

(defn get-arima [diff arima]
  (let [type {:type arima}
        p {:p arima}
        q {:q arima}
        d {:d arima}
        len {:len arima}]
    (if (= type "single")
      (let []
        nil)
      (if (= type "multi")
        (let []
          nil)
        nil))))

(defn parse-order-week
  "
  date is
  Developer's info data ... data is [oldest ... latest] by #(sorted-by first data)
  "
  [re?
   & {:keys [id data diff adf acf pacf arima]
      :or {id nil data nil diff nil adf nil acf nil pacf nil arima nil}}]
  (try
    (if (and id data diff)
      (if (> 2 re?)
        (let [req-start (:start data)
              req-end (:end data)
              title (:title data)
              type- (:type data)]
          (if (and (not (and (nil? req-start) (nil? req-end)
                             (nil? title) (nil? type-)))
                   (= Long (type req-start) (type req-end))
                   (= String (type title) (type type-)))
            (let [ts- (tsdata/get-tsdb
                       title {"type" type-}
                       (coerce/from-long (/ req-start 1000))
                       (coerce/from-long (/ req-end 1000)))]
              (if-not (string? ts-)

                (let [ts (sort-by first (map (fn [[k v]] [(* 1000 (Long/valueOf k)) v]) ts-))
                      get-start (first (first ts))
                      get-end (first (first (reverse ts)))]
                  (if (or
                       (if (t/before? (coerce/from-long (/ req-start 1000)) (coerce/from-long get-start))
                         (< 7 (t/in-days (t/interval (coerce/from-long (/ req-start 1000)) (coerce/from-long get-start)))) false)
                       (if (t/before? (coerce/from-long get-end) (coerce/from-long (/ req-end 1000)))
                         (< 7 (t/in-days (t/interval (coerce/from-long get-end) (coerce/from-long (/ req-end 1000))))) false))
                    (do
                      (let [start_date (t/minus (coerce/from-long (/ req-start 1000)) (t/months 1))
                            end_date (t/plus (coerce/from-long (/ req-end 1000)) (t/months 1))]
                        (if (not (and (nil? start_date) (nil? end_date)))
                          (do
                            (println (tsdata/send-data! (:api_key (db/get-api-key {:name id}))
                                                        {:name title :start_date start_date :end_date end_date}))
                            (Thread/sleep 10000)
                            (parse-order-week (inc re?) :id id :data data :diff diff :adf adf :acf acf :pacf pacf :arima arima))
                          "Invalid DateTime or Unknown Exception")))
                    (let [data* {:date (mapv first ts) :data (mapv second ts)}
                          diff* (get-diff diff (:data data*))
                          adf* (if adf (get-adf (:data data*) diff adf) nil)
                          acf* (if acf (get-acf diff* acf) nil)
                          pacf* (if pacf (get-pacf diff* pacf) nil)
                          arima* (if arima (get-arima (:data data*) arima) nil)]
                      {:data data*  :diff diff* :adf adf* :acf acf*
                       :pacf pacf* :arima arima*})
                    ))
                "DataBase Error"))
            "Invalid argument"))
        "Please set API key or Check data in Quandl")
      "Insufficient number of Arguments")
    (catch Exception e
      (do ;;(log/error e)
        (get-in
         (second (first (json/read-str (:body (ex-data e)))))
         ["message"])))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def par
  (parse-order-week
   0 :id "elect" :data {:start (* 1000 (coerce/to-long (t/date-time 2016 12 1)))
                        :end (* 1000 (coerce/to-long (t/date-time 2018 1 20)))
                        :title "NIKKEI/INDEX" :type "close-price"}
   :diff 1 :adf true :acf 20 :pacf 20))

(:pacf par)
;; (:acf par)
;; (get-acf  (get-diff 1 (:data (:data par))))
;; (get-adf (:data (:data par)) 1 true)
;; (tsdata/get-tsdb
;;  "NIKKEI/INDEX" {"type" "close-price"}
;;  (coerce/from-long (/ (* 1000 (coerce/to-long (t/date-time 2018 1 1))) 1000))
;;  (coerce/from-long (/ (* 1000 (coerce/to-long (t/date-time 2018 1 20))) 1000)))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

                ;; (let [ts (sort-by first (map (fn [[k v]] [(* 1000 (Long/valueOf k)) v]) ts-))
                ;;       get-start (first (first ts))
                ;;       get-end (first (first (reverse ts)))]
                ;;   (if (or
                ;;        (if (t/before? (coerce/from-long (/ req-start 1000)) (coerce/from-long get-start))
                ;;          (< 7 (t/in-days (t/interval (coerce/from-long (/ req-start 1000)) (coerce/from-long get-start)))) false)
                ;;        (if (t/before? (coerce/from-long get-end) (coerce/from-long (/ req-end 1000)))
                ;;          (< 7 (t/in-days (t/interval (coerce/from-long get-end) (coerce/from-long (/ req-end 1000))))) false))
                ;;     (do
                ;;       (let [start_date (t/minus (coerce/from-long (/ req-start 1000)) (t/months 1))
                ;;             end_date (t/plus (coerce/from-long (/ req-end 1000)) (t/months 1))]
                ;;         (if (not (and (nil? start_date) (nil? end_date)))
                ;;           (do
                ;;             (println (tsdata/send-data! (:api_key (db/get-api-key {:name id}))
                ;;                                         {:name title :start_date start_date :end_date end_date}))
                ;;             (Thread/sleep 10000)
                ;;             (parse-order-week (inc re?) :id id :data data :diff diff :adf adf :acf acf :pacf pacf :arima arima))
                ;;           "Invalid DateTime or Unknown Exception")))
                ;;     (let [data* {:date (map first ts) :data (map second ts)}
                ;;           diff* (get-diff diff (:data data*))
                ;;           adf* (if adf (get-adf (:data data*) diff adf) nil)
                ;;           acf* (if acf (get-acf diff* acf) nil)
                ;;           pacf* (if pacf (get-pacf diff* pacf) nil)
                ;;           arima* (if arima (get-arima (:data data*) arima) nil)]
                ;;       {:data data*  :diff diff* :adf adf* :acf acf*
                ;;        :pacf pacf* :arima arima*})))
