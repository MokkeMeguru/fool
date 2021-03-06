(ns fool.components.common
  (:require [cljsjs.material-ui]
            [reagent.core :as r :refer [atom]]
            [cljs-react-material-ui.reagent :as ui]))

(defn modal [header body footer]
  [:div
   [:div.modal-dialog
    [:div.modal-content
     [:div.modal-header [:h3 header]]
     [:div.modal-body body]
     [:div.modal-footer
      [:div.boostrap-dialog-footer
       footer]]]]
   [:div.modal-backdrop]])

(defn input [type id placeholder fields]
  [:input.form-control.input-lg
   {:type type
    :placeholder placeholder
    :value (id @fields)
    :on-change #(swap! fields assoc id (-> % .-target .-value))}])

(defn form-input [type label id placeholder fields optional?]
  [:div.form-group
   [:label label]
   (if optional?
     [input type id placeholder fields]
     [:div.input-group
      [input type id placeholder fields]
      [:span.input-group-addon
       "*"]])])

(defn text-input [label id placeholder fields & [optional?]]
  (form-input :text label id placeholder fields optional?))

(defn password-input [label id placeholder fields & [optional?]]
  (form-input :password label id placeholder fields optional?))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; not important form
(defn ni-form-input [type label id placeholder fields optional?]
  [:div.form-group
   [:label label]
   (if optional?
     [input type id placeholder fields]
     [:div.input-group
      [input type id placeholder fields]])])

(defn ni-text-input [label id placeholder fields & [optional?]]
  (ni-form-input :text label id placeholder fields optional?))

(defn ni-password-input [label id placeholder fields & [optional?]]
  (ni-form-input :password label id placeholder fields optional?))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn material-field [hint flt valfunc swapfunc]
  (r/as-element [ui/text-field {:hint-text hint :floating-label-text flt
                                :value valfunc :on-change swapfunc}]))

(defn datepick-field [hint valfunc changefunc]
  (r/as-element [ui/date-picker {:hint-text hint
                                 :value valfunc
                                 :on-change changefunc
                                 :input-style
                                 {:text-align "center"}}]))
