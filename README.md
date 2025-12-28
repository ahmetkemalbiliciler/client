# Bill Payment Chatbot - Frontend

Bu proje, **AI destekli fatura ödeme chatbot sistemi** için React frontend uygulamasıdır. Üniversite dönem projesi olarak geliştirilmiştir.

## 🎯 Proje Hakkında

Kullanıcıların doğal dil kullanarak fatura sorgulama ve ödeme yapmasını sağlayan bir chat arayüzüdür.

## 🏗️ Mimari Tasarım (Design)

```
client/
├── src/
│   ├── main.jsx          # React entry point
│   ├── App.jsx           # Ana component
│   ├── components/
│   │   └── ChatInterface.jsx  # Chat UI component
│   └── services/
│       └── api.js        # Backend API calls
├── index.html
└── tailwind.config.js
```

### Neden Bu Yapı?
- **Component-Based**: React'ın gücünü kullandık, her UI parçası ayrı component
- **Service Layer**: API çağrıları ayrı dosyada, component'ler sadık UI'a odaklanıyor
- **Vite**: Create React App yerine Vite tercih ettik çünkü daha hızlı, modern ve daha az konfigürasyon gerektiriyor
- **Tailwind CSS**: Hızlı styling için utility-first yaklaşım

## 🤔 Varsayımlar (Assumptions)

1. **Tek Sayfa Uygulama**: Routing gerekmiyor, sadece chat ekranı var
2. **Backend Localhost**: Development'ta backend `localhost:3000`'de çalışıyor varsaydık
3. **Modern Tarayıcı**: ES6+ destekleyen tarayıcı kullanılıyor
4. **Mobil Uyumluluk**: Responsive tasarım yaptık ama öncelik desktop'ta

## ⚠️ Karşılaşılan Sorunlar (Issues Encountered)

1. **Auto-scroll**: Yeni mesaj geldiğinde chat'in otomatik aşağı kayması gerekiyordu:
   ```javascript
   useEffect(() => {
       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
   }, [messages]);
   ```
   İlk başta `useRef` kullanmayı unuttuk, DOM manipulation ile uğraştık.

2. **Loading State**: Backend yavaş yanıt verdiğinde kullanıcı butona birden fazla basabiliyordu. `loading` state ekleyip butonu disable ettik.

3. **CORS Hataları**: İlk başta backend'de CORS açık değildi, `Access-Control-Allow-Origin` hatası aldık. Backend'e `cors` middleware ekledik.

4. **Boş Mesaj Gönderimi**: Kullanıcı boşluk tuşuyla boş mesaj gönderebiliyordu:
   ```javascript
   if (!input.trim()) return;
   ```

5. **Tailwind Purge**: Production build'de bazı class'lar kayboluyordu. `tailwind.config.js`'de content path'lerini doğru ayarlamamıştık.

## 🚀 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development mode
npm run dev

# Production build
npm run build

# Build preview
npm run preview
```

## 🔧 Konfigürasyon

Backend URL'ini değiştirmek için `src/services/api.js` dosyasını düzenleyin:
```javascript
const API_URL = 'http://localhost:3000'; // Backend adresi
```

## 📱 Özellikler

- ✅ Gerçek zamanlı chat arayüzü
- ✅ Mesaj geçmişi
- ✅ Loading indicator (yazıyor animasyonu)
- ✅ Responsive tasarım
- ✅ Hata yönetimi

---

*Geliştirici: Bilgisayar Mühendisliği Öğrencisi | Dönem Projesi 2024*
