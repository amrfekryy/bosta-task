// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources = {
  en: {
    translation: {
      "TICKET_CREATED": "Ticket Created",
      "PACKAGE_RECEIVED": "Package Received",
      "IN_TRANSIT": "In Transit",
      "NOT_YET_SHIPPED": "Not Yet Shipped",
      "OUT_FOR_DELIVERY": "Out For Delivery",
      "WAITING_FOR_CUSTOMER_ACTION": "Waiting For Customer Action",
      "DELIVERED": "Delivered",
      "RECEIVED_DELIVERY_LOCATION": "Received Delivery Location",
      "DELIVERED_TO_SENDER": "Delivered To Sender",
      "": "",
    }
  },
  ar: {
    translation: {
      "Shipment No. ": "رقم الشحنة ",
      "Last Update": "اخر تحديث",
      "Vendor Name": "اسم التاجر",
      "Delivery Date": "موعد التسليم خلال",
      "Ticket Created": "تم إنشاء الشحنة",
      "Package Received": "تم استلام الشحنة من التاجر",
      "Out for Delivery": "الشحنة خرجت للتسليم",
      "Delivered": "تم التسليم",
      "Shipment Details": "تفاصيل الشحنة",
      "Hub": "الفرع",
      "Date": "التاريخ",
      "Time": "الوقت",
      "Details": "تفاصيل",
      "Delivery Address": "عنوان التسليم",
      "Is there a problem in your shipment?": "هل يوجد مشكلة في شحنتك؟",
      "Report a problem": "إبلاغ عن مشكلة",

      // shipment states from API
      "TICKET_CREATED": "تم إنشاء الشحنة",
      "PACKAGE_RECEIVED": "تم استلام الشحنة",
      "IN_TRANSIT": "يتم نقل الشحنة",
      "NOT_YET_SHIPPED": "لم يتم الشحن بعد",
      "OUT_FOR_DELIVERY": "الشحنة خرجت للتسليم",
      "WAITING_FOR_CUSTOMER_ACTION": "في انتظار رد العميل",
      "DELIVERED": "تم التسليم",
      "RECEIVED_DELIVERY_LOCATION": "تم تحديد مكان التسليم",
      "DELIVERED_TO_SENDER": "تم التسليم الى المرسل",
      
      // hubs from API
      "Mohandseen Hub": "فرع المهندسين",
      "Tanta Hub": "فرع طنطا",
      "Alexandria Hub": "فرع الإسكندرية",
      "Katamya Hub": "فرع القطامية",
      "Cairo Sorting Facility": "مبنى التوزيع بالقاهرة",
      "Bosta HQ": "مقر بوسطة",
      "": "",
    }
  }
};