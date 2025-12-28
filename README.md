**21070006001 Ahmet Kemal Biliciler**

# Bill Payment Chatbot - Frontend

Bu proje, **AI destekli fatura ödeme chatbot sistemi** için React frontend uygulamasıdır. 

##  Project Links

| Link | URL |
|------|-----|
| **Frontend Source** | https://github.com/ahmetkemalbiliciler/client |
| **Backend Source** | https://github.com/ahmetkemalbiliciler/gateway |
| **Video Presentation** | [Google Drive](https://drive.google.com/file/d/1XXkXrfdhcC1uCRPc-DCDKp2_nWDKHDlW/view?usp=sharing) |
| **Live Demo (Frontend)** | https://client-pq7g.onrender.com/ |
| **Live Demo (Backend)** | https://gateway-77vi.onrender.com/ |
| **API Docs (Swagger)** | https://midterm4458.onrender.com/api-docs/ |

##  Proje Hakkında

Kullanıcıların doğal dil kullanarak fatura sorgulama ve ödeme yapmasını sağlayan bir chat arayüzüdür.

##  Mimari Tasarım (Design)

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

## Varsayımlar (Assumptions)

1. **Tek Sayfa Uygulama**: Routing gerekmiyor, sadece chat ekranı var

## Karşılaşılan Sorunlar (Issues Encountered)

1. **Loading State**: Backend yavaş yanıt verdiğinde kullanıcı butona birden fazla basabiliyordu. `loading` state ekleyip butonu disable ettik.

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development mode
npm run dev

# Production build
npm run build
```

## Environment Variables

```
VITE_BACKEND_URL=https://your-backend-url.com/api
```

---

