# Astrovia

Bu paket Astrovia'nın Lovable'dan bağımsız ilk sürümüdür.

## Şu anda
- Mobil uyumlu ana sayfa
- Astroloji / astronomi / gökyüzü takvimi bölümleri
- `/admin` benzeri `admin.html` yönetim ekranı
- Günlük burç yorumu ekleme
- İlk test için tarayıcı `localStorage` kullanımı

## Sonraki adım
Gerçek çok cihazlı yayın için `admin.js` içindeki localStorage katmanı Supabase Auth + Database ile değiştirilecek. Böylece iPad'den yayınlanan içerik tüm ziyaretçilere ulaşacak ve yalnızca yetkili hesap yönetim paneline girecek.

Not: Bu paket demo yönetim panelidir; production'da gerçek kimlik doğrulama eklenmeden admin sayfası güvenli kabul edilmemelidir.
