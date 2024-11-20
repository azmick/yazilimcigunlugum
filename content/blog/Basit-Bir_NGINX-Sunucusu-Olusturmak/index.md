---
title: "Basit Bir NGINX Sunucusu Oluşturmak"
date: "2024-11-19"
description: "Docker kullanarak basit bir NGINX sunucusu oluşturma ve yönetme adımları."
---

## Basit Bir NGINX Sunucusu Oluşturmak

Docker, konteyner tabanlı uygulama geliştirme ve yönetme için harika bir araçtır. Bu yazıda, basit bir NGINX sunucusu oluşturmayı ve yönetmeyi öğreneceğiz.

### NGINX Konteyner Oluşturma

Bir NGINX konteynerı oluşturmak için aşağıdaki komutu kullanabilirsiniz:

```bash
docker run --name [istediğiniz_isim] -p [iç_port:dış_port] -d nginx
```

**Parametreler:**
- `[istediğiniz_isim]`: Konteynerınıza vereceğiniz isim.
- `[iç_port]`: NGINX’in çalıştığı port (genellikle `80`).
- `[dış_port]`: Sunucunuzu dış dünyaya açtığınız port (örneğin `8080`).

Örnek:
```bash
docker run --name nginx_ornek -p 8080:80 -d nginx
```

Bu komutla, `nginx_ornek` adında bir konteyner oluşturulur ve 8080 portundan erişilebilir hale gelir.

### NGINX Loglarını Kontrol Etme

Konteynerınızın loglarını görmek isterseniz aşağıdaki komutu kullanabilirsiniz:

```bash
docker logs [konteyner_adı]
```

Örnek:
```bash
docker logs nginx_ornek
```

### NGINX Konteynerını Durdurma

Konteynerı durdurmak için şu komutu çalıştırabilirsiniz:

```bash
docker stop [konteyner_adı]
```

Örnek:
```bash
docker stop nginx_ornek
```

### NGINX Konteynerını Silme

Konteynerı tamamen silmek için aşağıdaki komut kullanılır:

```bash
docker rm [konteyner_adı]
```

Örnek:
```bash
docker rm nginx_ornek
```

**Not:** Eğer bir konteyner çalışıyorsa, silmeden önce durdurmanız gerekir.

---

Bu adımları takip ederek basit bir NGINX sunucusu oluşturabilir ve Docker’ı daha iyi anlamak için pratik yapabilirsiniz. İyi çalışmalar!
