export type Client = { id: string; name: string; initials: string; program: string; camp: string; progress: number; day: string; lastCheckin: string; status: "Aktif" | "Beklemede" | "Yeni"; tone: "green" | "beige" | "pink" | "blue" };
export type Recipe = { id: string; name: string; description: string; category: string; duration: string; servings: string; image: string; ingredients: string[]; instructions: string[] };

export const clients: Client[] = [
  { id: "ayse-yilmaz", name: "Ayşe Yılmaz", initials: "AY", program: "21 Günlük Beslenme Kampı", camp: "Dengeli Yaşam", progress: 71, day: "Gün 15/21", lastCheckin: "Bugün yaptı", status: "Aktif", tone: "green" },
  { id: "zeynep-kaya", name: "Zeynep Kaya", initials: "ZK", program: "Detoks Kampı", camp: "Yaza Hafif Başla", progress: 42, day: "Gün 3/7", lastCheckin: "Dün yaptı", status: "Beklemede", tone: "beige" },
  { id: "mehmet-demir", name: "Mehmet Demir", initials: "MD", program: "Dengeli Beslenme", camp: "Dengeli Yaşam", progress: 88, day: "Gün 18/21", lastCheckin: "Bugün yaptı", status: "Aktif", tone: "blue" },
  { id: "elif-sahin", name: "Elif Şahin", initials: "EŞ", program: "İyi Hisset Programı", camp: "Yeni Başlangıç", progress: 25, day: "Gün 5/21", lastCheckin: "2 gün önce", status: "Yeni", tone: "pink" },
];

export const recipes: Recipe[] = [
  { id: "badem-unlu-pankek", name: "Badem Unlu Pankek", category: "Kahvaltı", duration: "15 dk", servings: "1 kişilik", description: "Güne dengeli ve keyifli bir başlangıç için pratik bir tarif.", image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=80", ingredients: ["2 yemek kaşığı badem unu", "1 yumurta", "Yarım muz", "1 çay kaşığı tarçın", "Yaban mersini"], instructions: ["Yumurta, muz ve badem ununu pürüzsüz olana kadar karıştırın.", "Yapışmaz tavada iki tarafını da kısık ateşte pişirin.", "Meyvelerle süsleyerek ılık servis edin."] },
  { id: "yulaf-lapasi", name: "Yulaf Lapası", category: "Kahvaltı", duration: "10 dk", servings: "1 kişilik", description: "Güne enerjik başlamak için sade ve doyurucu bir kahvaltı.", image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=1000&q=80", ingredients: ["3 yemek kaşığı yulaf", "1 su bardağı badem sütü", "Yarım muz", "Tarçın"], instructions: ["Yulafı badem sütüyle orta ateşte pişirin.", "Muzu dilimleyip üzerine ekleyin.", "İsteğe bağlı tarçın serperek servis edin."] },
  { id: "yesil-cay-ceviz", name: "Yeşil Çay & Ceviz", category: "Ara Öğün", duration: "5 dk", servings: "1 kişilik", description: "Öğünler arası enerjini toparlayan hafif bir ara öğün.", image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=80", ingredients: ["1 fincan şekersiz yeşil çay", "2 adet ceviz içi"], instructions: ["Yeşil çayı demleyin.", "Cevizle birlikte sakin bir ortamda tüketin."] },
  { id: "kinoali-salata", name: "Kinoalı Tavuk Salata", category: "Öğle", duration: "25 dk", servings: "1 kişilik", description: "Renkli sebzeler ve tavukla hazırlanmış doyurucu bir öğle seçeneği.", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=1000&q=80", ingredients: ["4 yemek kaşığı kinoa", "Izgara tavuk", "Roka ve yeşillikler", "Cherry domates", "Zeytinyağı"], instructions: ["Kinoayı paketteki süreye göre haşlayın.", "Tüm malzemeleri geniş bir kapta birleştirin.", "Zeytinyağı ekleyip nazikçe karıştırın."] },
  { id: "mercimek-corbasi", name: "Sebzeli Mercimek Çorbası", category: "Akşam", duration: "30 dk", servings: "2 kişilik", description: "Mevsim sebzeleriyle hazırlanan sade bir akşam alternatifi.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80", ingredients: ["Kırmızı mercimek", "Havuç", "Soğan", "Zeytinyağı", "Kimyon"], instructions: ["Sebzeleri zeytinyağında kısa süre çevirin.", "Mercimek ve suyu ekleyerek yumuşayana kadar pişirin.", "Dilerseniz blenderdan geçirip servis edin."] },
];

export const camps = [
  { id: "dengeli-yasam", name: "21 Günlük Beslenme Kampı", description: "Günlük küçük adımlarla daha düzenli bir beslenme rutini.", participants: 48, progress: 33, status: "Aktif", dates: "13 Mayıs - 2 Haziran" },
  { id: "yaza-hafif", name: "Yaza Hafif Başla", description: "Yaz öncesi dengeli rutinler için 14 günlük kamp.", participants: 22, progress: 64, status: "Aktif", dates: "20 Mayıs - 3 Haziran" },
  { id: "yeni-baslangic", name: "Yeni Başlangıç", description: "Beslenme düzenine sade bir başlangıç yapmak isteyenlere özel.", participants: 16, progress: 0, status: "Taslak", dates: "10 Haziran - 30 Haziran" },
];

export const notifications = [
  { id: 1, title: "Ayşe Yılmaz check-in gönderdi", description: "Günlük değerlendirmesini inceleyebilirsiniz.", time: "10 dakika önce", read: false, type: "checkin" },
  { id: 2, title: "Mehmet Demir yeni mesaj gönderdi", description: "Programındaki öğle öğünü hakkında bir sorusu var.", time: "1 saat önce", read: false, type: "message" },
  { id: 3, title: "Kamp programı güncellendi", description: "21 Günlük Beslenme Kampı için 8. gün düzenlendi.", time: "Dün", read: true, type: "camp" },
  { id: 4, title: "Yeni katılımcı talebi", description: "Elif Şahin kamp davetini kabul etti.", time: "Dün", read: true, type: "client" },
];

export const conversations = [
  { id: "ayse", name: "Ayşe Yılmaz", initials: "AY", preview: "Teşekkür ederim, uygulayacağım.", time: "10:32", unread: 2, tone: "green" as const },
  { id: "mehmet", name: "Mehmet Demir", initials: "MD", preview: "Öğle öğününü değiştirebilir miyiz?", time: "Dün", unread: 0, tone: "blue" as const },
  { id: "zeynep", name: "Zeynep Kaya", initials: "ZK", preview: "Check-in formumu gönderdim.", time: "Pzt", unread: 0, tone: "beige" as const },
];

export const mealPlan = [
  { meal: "Kahvaltı", time: "08:00 - 09:30", title: "Yulaf Lapası", detail: "3 yemek kaşığı yulaf, 1 su bardağı badem sütü ve yarım muz.", icon: "Sun", recipeId: "yulaf-lapasi" },
  { meal: "Ara Öğün", time: "11:00", title: "Yeşil Çay & Ceviz", detail: "1 fincan şekersiz çay ve 2 adet ceviz içi.", icon: "Coffee", recipeId: "yesil-cay-ceviz" },
  { meal: "Öğle", time: "13:30 - 14:30", title: "Kinoalı Tavuk Salata", detail: "Bol yeşillik, ızgara tavuk ve 1 tatlı kaşığı zeytinyağı.", icon: "Utensils", recipeId: "kinoali-salata" },
  { meal: "Akşam", time: "19:00 - 20:00", title: "Mercimek Çorbası", detail: "1 kase çorba ve zeytinyağlı sebze yemeği.", icon: "Moon", recipeId: "mercimek-corbasi" },
];
