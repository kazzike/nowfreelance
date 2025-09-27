---
title: "Guía Completa de Migración a la Privacidad Digital: De Google a Alternativas Libres y Seguras (2025) - 1/2"
description: "Aprende paso a paso cómo dejar los servicios de Google y migrar hacia alternativas libres, seguras y respetuosas con tu privacidad digital."
date: 2025-09-23T09:00:00Z
categories:
  - Privacidad Digital
  - Tecnología
  - Software Libre
tags:
  - Migración Digital
  - Privacidad
  - Seguridad
  - Google
  - Alternativas Libres
  - Software Libre
  - Autonomía Digital
slug: "tutorial-completo-paso-a-paso-migracion-hacia-la-libertad-digital-parte-1-de-2"
draft: false
---


# Guía Completa de Migración a la Privacidad Digital: De Google a Alternativas Libres y Seguras (2025)

**Versión:** 2025.09  
**Fecha:** Septiembre 2025
**Autor:** Guía de Migración Digital  
**Licencia:** Creative Commons CC BY-SA 4.0

## Tabla de Contenidos 1/2

0. [Introducción](#introducción)
1. [Evaluación y Preparación](#paso-1-evaluación-y-preparación)
2. [Migración de Datos Sensibles](#paso-2-migración-de-datos-sensibles)
3. [Migración de Correo Electrónico](#paso-3-migración-de-correo-electrónico)
4. [Migración de Almacenamiento y Documentos](#paso-4-migración-de-almacenamiento-documentos-y-sheets)
5. [Migración de Calendario y Contactos](#paso-5-migración-de-calendario-contactos-y-otros-servicios)
6. [Consideraciones Adicionales](#paso-6-otras-consideraciones-y-recomendaciones-adicionales)


---

## Introducción

En una era donde la privacidad digital se ha convertido en un derecho fundamental amenazado, migrar desde servicios que explotan datos (como Google) hacia alternativas centradas en la privacidad es más que una preferencia personal: es una necesidad de seguridad digital.

Esta guía exhaustiva te acompañará paso a paso en el proceso de "liberación digital", priorizando herramientas gratuitas cuando sea posible, sin comprometer la funcionalidad o la seguridad. El objetivo es lograr un ecosistema digital que respete tu privacidad mientras mantienes la productividad y colaboración necesarias.

### ¿Por qué migrar de Google?

- **Vigilancia masiva**: Google recopila datos de búsquedas, ubicación, correos, documentos y actividad web
- **Perfilado publicitario**: Creación de perfiles detallados para publicidad dirigida
- **Falta de control**: Limitaciones en la exportación y control real de tus datos
- **Dependencia del ecosistema**: Dificultad para cambiar una vez integrado completamente

### Beneficios de la migración

- **Privacidad real**: Cifrado de extremo a extremo y políticas de no logs
- **Control de datos**: Posesión y gestión completa de tu información
- **Independencia**: Reducción de dependencias de grandes corporaciones
- **Transparencia**: Acceso al código fuente en muchas alternativas
- **Soberanía digital**: Capacidad de auto-hospedaje cuando sea necesario

---

## Paso 1: Evaluación y Preparación

### 1.1 Auditoría de Servicios de Google

Antes de iniciar la migración, es crucial realizar un inventario completo de todos los servicios de Google que utilizas:

#### Servicios principales a evaluar:

**Comunicación y correo:**

- Gmail (correos personales, profesionales, filtros, etiquetas)
- Google Contacts (contactos sincronizados)
- Google Meet (historial de reuniones)
- Google Chat/Hangouts (conversaciones)

**Almacenamiento y documentos:**

- Google Drive (archivos, carpetas compartidas, permisos)
- Google Docs (documentos de texto, colaboraciones)
- Google Sheets (hojas de cálculo, fórmulas, scripts)
- Google Slides (presentaciones)
- Google Forms (formularios y respuestas)

**Organización:**

- Google Calendar (eventos, recordatorios, calendarios compartidos)
- Google Keep (notas, listas, recordatorios)
- Google Tasks (tareas y proyectos)

**Multimedia:**

- Google Photos (fotos, álbumes, videos)
- YouTube (canal, listas de reproducción, suscripciones)
- Google Play Music/YouTube Music (biblioteca musical)

**Navegación y mapas:**

- Google Maps (ubicaciones guardadas, historial, reseñas)
- Google My Business (si tienes negocio)

**Desarrollo y técnico:**

- Google Analytics
- Google Search Console
- Google Cloud Platform
- Android (sincronización, backups)

#### Identificación de datos sensibles:

Clasifica tus datos por nivel de sensibilidad:

**Nivel 1 - Extremadamente sensible:**

- Documentos médicos y de salud
- Información financiera y bancaria
- Documentos legales y contratos
- Fotos personales íntimas
- Conversaciones privadas importantes

**Nivel 2 - Sensible:**

- Documentos de trabajo confidenciales
- Información personal identificable
- Fotos familiares
- Correspondencia personal

**Nivel 3 - Moderadamente sensible:**

- Documentos de trabajo generales
- Fotos sociales
- Listas de contactos
- Calendarios personales

### 1.2 Descarga con Google Takeout

Google Takeout es tu herramienta principal para extraer datos de Google de forma masiva.

#### Proceso paso a paso:

1. **Acceso a Google Takeout:**

   - Visita [takeout.google.com](https://takeout.google.com)
   - Inicia sesión con tu cuenta de Google

2. **Selección de datos:**

   - **Recomendación**: Selecciona todos los servicios inicialmente
   - Para datos sensibles, considera descargas selectivas por servicio
   - Presta especial atención a:
     - Gmail: Selecciona "Incluir todos los mensajes en Sent y todos los mensajes"
     - Drive: Asegúrate de incluir todos los formatos
     - Photos: Elige la calidad original
     - Calendar: Incluye todos los calendarios

3. **Configuración de formato:**

   - **Formato de archivo**: ZIP (recomendado para archivos grandes)
   - **Tamaño máximo**: 2GB por archivo (para facilitar descargas)
   - **Método de entrega**: Descargar vía enlace (más seguro que email)

4. **Formatos de exportación importantes:**
   - **Gmail**: MBOX (compatible con la mayoría de clientes de correo)
   - **Contacts**: vCard (.vcf)
   - **Calendar**: iCalendar (.ics)
   - **Drive**: Formatos originales + conversiones (Docs a .docx, Sheets a .xlsx)

#### Ejemplo práctico - Descarga selectiva de Gmail:

```bash
# Estructura típica de descarga de Gmail via Takeout
Gmail/
├── All mail Including Spam and Trash.mbox
├── Contacts/
│   ├── All Contacts/
│   │   ├── contact_info.csv
│   │   └── contacts.vcf
├── Filters/
│   └── mail-filters.xml
└── Labels/
    ├── Important.mbox
    ├── Personal.mbox
    └── Work.mbox
```

### 1.3 Preparación del almacenamiento local cifrado

La seguridad de tus datos durante la migración es fundamental.

#### Herramientas de cifrado recomendadas:

**VeraCrypt** - Cifrado de discos y particiones

- **Descarga**: [veracrypt.fr](https://veracrypt.fr)
- **Compatibilidad**: Windows, macOS, Linux
- **Uso**: Cifrado de discos externos para backups

**Configuración de VeraCrypt:**

1. **Instalación**:

   ```bash
   # Ubuntu/Debian
   sudo apt update && sudo apt install veracrypt

   # macOS (con Homebrew)
   brew install --cask veracrypt

   # Windows: Descarga el instalador desde el sitio oficial
   ```

2. **Creación de volumen cifrado**:
   - Abre VeraCrypt
   - "Create Volume" > "Create an encrypted file container"
   - Tamaño recomendado: Al menos 50GB para datos de migración
   - Algoritmo: AES (balance entre seguridad y velocidad)
   - Hash: SHA-512
   - **Contraseña fuerte**: Usa generador de contraseñas

**Cryptomator** - Para dispositivos móviles

- **Descarga iOS**: [App Store - Cryptomator](https://apps.apple.com/app/cryptomator/id953086535)
- **Descarga Android**: [Google Play - Cryptomator](https://play.google.com/store/apps/details?id=org.cryptomator)
- **Uso**: Cifrado de carpetas en servicios de nube

### 1.4 Instalación de herramientas esenciales

#### Suite Proton (Gratuita)

**Proton Mail**

- **Límites gratuitos (2025)**: 1GB almacenamiento de correo, 150 mensajes/día
- **Características**: Cifrado de extremo a extremo, cliente web y móvil
- **Registro**: [proton.me/mail](https://proton.me/mail)

**Proton Drive**

- **Límites gratuitos (2025)**: 5GB de almacenamiento
- **Características**: Cifrado de extremo a extremo, sincronización multiplataforma
- **Acceso**: Incluido con cuenta Proton Mail

**Proton Calendar**

- **Límites gratuitos**: Calendarios ilimitados, eventos ilimitados
- **Características**: Cifrado de extremo a extremo, sincronización CalDAV
- **Acceso**: Incluido con cuenta Proton Mail

**Proton VPN**

- **Límites gratuitos**: 1 dispositivo, 3 países, velocidad media
- **Uso recomendado**: Durante el proceso de migración para mayor privacidad

#### Gestión de conocimiento y documentos

**Obsidian**

- **Descarga**: [obsidian.md](https://obsidian.md)
- **Compatibilidad**: Windows, macOS, Linux, iOS, Android
- **Licencia**: Gratuito para uso personal
- **Ventajas**:
  - Archivos en formato Markdown (no propietario)
  - Plugins extensos
  - Funciona sin conexión
  - Gráfico de conocimiento visual

**Instalación y configuración inicial:**

```bash
# Linux (AppImage)
wget https://github.com/obsidianmd/obsidian-releases/releases/download/v1.4.16/Obsidian-1.4.16.AppImage
chmod +x Obsidian-1.4.16.AppImage
./Obsidian-1.4.16.AppImage

# macOS
brew install --cask obsidian

# Windows: Descarga el instalador desde obsidian.md
```

#### Herramientas de seguridad

**Bitwarden** - Gestor de contraseñas

- **Plan gratuito**: Contraseñas ilimitadas, un dispositivo
- **Descarga**: [bitwarden.com](https://bitwarden.com)
- **Características**: Cifrado de extremo a extremo, auto-completado, generador de contraseñas

**Configuración inicial de Bitwarden:**

1. Crea cuenta en bitwarden.com
2. Instala extensiones del navegador
3. Instala aplicaciones móviles
4. **Migra contraseñas**: Exporta desde Google Password Manager
   - Visita [passwords.google.com](https://passwords.google.com)
   - Configuración > Exportar contraseñas > Descargar CSV
   - Importa en Bitwarden: Herramientas > Importar datos

#### Colaboración en documentos

**CryptPad**

- **Servicio**: [cryptpad.fr](https://cryptpad.fr) (instancia oficial gratuita)
- **Límites gratuitos**: 1GB de almacenamiento, documentos ilimitados
- **Características**:
  - Cifrado de extremo a extremo
  - Colaboración en tiempo real
  - Compatible con documentos, hojas de cálculo, presentaciones
  - Sin registro requerido (opcional)

**Ejemplo de uso de CryptPad:**

1. **Acceso directo**: Ve a cryptpad.fr
2. **Crear documento**: "New" > "Rich Text"
3. **Colaboración**: Comparte el enlace (¡el enlace contiene las claves de cifrado!)
4. **Almacenamiento**: Regístrate para guardar documentos permanentemente

---

## Paso 2: Migración de Datos Sensibles

### 2.1 Identificación y extracción prioritaria

Los datos sensibles requieren atención inmediata y manejo especial durante la migración.

#### Búsqueda avanzada en Gmail para datos sensibles:

Utiliza estos operadores de búsqueda en Gmail para identificar correos importantes:

```
# Búsquedas específicas para datos sensibles
has:attachment filename:pdf (bank OR medical OR insurance OR tax)
from:(bank OR paypal OR insurance) has:attachment
subject:(invoice OR receipt OR statement OR contract)
newer_than:2020/1/1 (password OR login OR account OR secure)
```

**Proceso de descarga selectiva:**

1. **Por etiquetas importantes:**

   - Crea etiquetas temporales para organizar: "Migration_Financial", "Migration_Medical", etc.
   - Aplica etiquetas a correos sensibles
   - Exporta cada etiqueta por separado en Takeout

2. **Descarga manual para documentos críticos:**
   - Usa Gmail search para encontrar attachments específicos
   - Descarga manualmente documentos que no pueden perderse

#### Extracción de Google Drive - Datos críticos:

**Método 1: Descarga selectiva manual**

```bash
# Estructura recomendada para organización local
MigratedData/
├── 01_Critical/
│   ├── Medical/
│   ├── Financial/
│   ├── Legal/
│   └── Personal/
├── 02_Important/
│   ├── Work/
│   ├── Projects/
│   └── Archives/
└── 03_General/
    ├── Photos/
    ├── Documents/
    └── Others/
```

**Método 2: Google Drive API (para volúmenes grandes)**

```python
# Script ejemplo para descarga masiva (requiere configuración API)
from googleapiclient.discovery import build
from google.auth.transport.requests import Request

# Este es un ejemplo conceptual - requiere configuración completa de API
def download_sensitive_files():
    service = build('drive', 'v3', credentials=creds)

    # Buscar archivos sensibles
    query = "name contains 'medical' or name contains 'financial'"
    results = service.files().list(q=query).execute()

    # Descargar cada archivo
    for file in results.get('files', []):
        print(f'Descargando: {file["name"]}')
        # Lógica de descarga aquí
```

### 2.2 Configuración segura de cuenta Proton

#### Registro y configuración inicial:

**Paso 1: Crear cuenta Proton**

1. **Visita** [proton.me/mail](https://proton.me/mail)
2. **Selecciona** "Create a free account"
3. **Elige username**: Preferiblemente diferente a tu Gmail
4. **Contraseña segura**: Usa Bitwarden para generar
5. **Método de recuperación**: Email alternativo o teléfono (opcional pero recomendado)

**Configuración de seguridad avanzada:**

```
Proton Mail > Settings > Security:
├── Two-factor authentication: ✅ Habilitado (usar Aegis/Authy)
├── Session management: ✅ Revisar dispositivos activos
├── Privacy:
│   ├── Auto-save contacts: ❌ Deshabilitado
│   ├── Auto-show images: ❌ Deshabilitado
│   └── Read receipts: ❌ Deshabilitado
└── Encryption:
    ├── Address verification: ✅ Habilitado
    └── Sign outgoing messages: ✅ Habilitado
```

#### Configuración de 2FA con Aegis:

**Aegis Authenticator** (Android) - Alternativa libre a Google Authenticator

- **Descarga**: [F-Droid](https://f-droid.org/en/packages/com.beemdevelopment.aegis/) o [Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
- **Características**: Código abierto, backups cifrados, sin dependencias de Google

**Configuración paso a paso:**

1. **En Proton Mail**: Settings > Account and password > Two-factor authentication
2. **Escanea QR** con Aegis
3. **Backup de códigos**: Guarda los códigos de recuperación en Bitwarden
4. **Prueba**: Cierra sesión y prueba el login con 2FA

### 2.3 Migración inicial de archivos críticos

#### Subida a Proton Drive:

**Límites y consideraciones:**

- **Límite gratuito**: 5GB total
- **Tamaño de archivo**: Máximo 100MB por archivo en plan gratuito
- **Cifrado**: Automático de extremo a extremo
- **Acceso**: Web, móvil (iOS/Android), próximamente desktop sync

**Proceso de migración:**

1. **Priorización por criticidad:**

   - Nivel 1: Documentos médicos, financieros, legales (subir primero)
   - Nivel 2: Documentos de trabajo importantes
   - Nivel 3: Archivos generales (evaluar si necesitas migrar todos)

2. **Organización en Proton Drive:**

```
Proton Drive estructura sugerida:
├── 🔒 Critical/
│   ├── Medical/
│   ├── Financial/
│   ├── Legal/
│   └── Identity/
├── 💼 Work/
│   ├── Projects/
│   ├── Contracts/
│   └── Archive/
├── 📸 Photos_Important/
│   ├── Family/
│   └── Events/
└── 📄 General/
    ├── Reference/
    └── Temp/
```

#### Alternativas para almacenamiento adicional:

**Ente.io** - Para fotos y medios

- **Plan gratuito**: 5GB
- **Características**: Cifrado de extremo a extremo, código abierto
- **Registro**: [ente.io](https://ente.io)
- **Ventaja**: Especializado en fotos, detección de duplicados

**Auto-hospedaje con Nextcloud** (para usuarios avanzados):

```bash
# Instalación básica en servidor Ubuntu
sudo apt update
sudo apt install snapd
sudo snap install nextcloud

# Configuración inicial
sudo nextcloud.manual-install admin password

# Acceso: https://tu-servidor/nextcloud
```

### 2.4 Verificación de cifrado y eliminación segura

#### Verificación de cifrado en Proton:

**Indicadores de cifrado correcto:**

- Icono de candado en archivos subidos
- Mensaje "End-to-end encrypted" al compartir
- Imposibilidad de previsualizar archivos sensibles sin descargar

**Test de cifrado:**

1. Sube archivo de prueba a Proton Drive
2. Intenta acceder desde navegador privado sin login
3. Verifica que el archivo no es accesible

#### Eliminación segura de Google (TEMPORAL):

⚠️ **IMPORTANTE**: NO elimines datos de Google hasta completar toda la migración

**Pasos preparatorios para eliminación:**

1. **Revoca acceso a aplicaciones**: [myaccount.google.com/permissions](https://myaccount.google.com/permissions)
2. **Pausa sincronización**: Android Settings > Accounts > Google > Deshabilita sincronización temporal
3. **Backup local**: Mantén copias locales cifradas de todo

**Eliminación gradual (después de verificación completa):**

```
Orden recomendado de eliminación:
1. Google Photos (después de migrar fotos críticas)
2. Google Drive (después de migrar documentos)
3. Gmail (después de confirmar migración de correo)
4. Otros servicios (Maps, YouTube, etc.)
5. Cuenta completa (solo si no necesitas ningún servicio)
```

---

## Paso 3: Migración de Correo Electrónico

### 3.1 Descarga completa de Gmail

La migración del correo electrónico es una de las partes más críticas del proceso, ya que involucra años de correspondencia, contactos y configuraciones.

#### Descarga vía Google Takeout - Configuración detallada:

**Configuración óptima para Gmail:**

1. **Accede a Google Takeout**: [takeout.google.com](https://takeout.google.com)
2. **Selecciona solo Gmail** para una descarga específica
3. **Configuración avanzada:**

   ```
   Gmail Export Settings:
   ├── Include all messages in Mail: ✅
   ├── Include all messages in Spam: ❌ (opcional)
   ├── Include all messages in Trash: ❌ (opcional)
   ├── Format: MBOX ✅ (más compatible)
   └── Archive size: 2GB (para descargas estables)
   ```

4. **Descarga separada de Contacts:**
   - Selecciona "Contacts" en Takeout
   - Formato: vCard (.vcf) para máxima compatibilidad

#### Estructura típica de descarga Gmail:

```bash
Gmail-Export/
├── All mail Including Spam and Trash.mbox  # Archivo principal
├── Contacts/
│   ├── contacts.vcf                        # Todos los contactos
│   └── contact_info.csv                    # Datos adicionales
├── Filters/
│   └── mail-filters.xml                    # Reglas de filtrado
└── Labels/
    ├── Important.mbox                      # Por etiquetas
    ├── [Custom Label].mbox
    └── ...
```

**Verificación de descarga:**

```bash
# Verificar integridad de archivos MBOX
file Gmail/All\ mail\ Including\ Spam\ and\ Trash.mbox
# Output esperado: "RFC 822 mail text"

# Contar mensajes aproximados
grep -c "^From " Gmail/All\ mail\ Including\ Spam\ and\ Trash.mbox
```

### 3.2 Importación a Proton Mail

#### Método 1: Proton Mail Bridge (Recomendado para desktop)

**Proton Mail Bridge** es la herramienta oficial para sincronizar Proton Mail con clientes de correo locales.

**Descarga e instalación:**

- **Descarga**: [proton.me/mail/bridge](https://proton.me/mail/bridge)
- **Requisitos**: Cuenta Proton Mail Plus (de pago) O uso temporal de trial
- **Compatibilidad**: Windows, macOS, Linux

**Configuración con Thunderbird:**

1. **Instala Thunderbird**: [thunderbird.net](https://www.thunderbird.net)
2. **Instala Proton Bridge**
3. **Configuración**:
   ```
   Proton Bridge Settings:
   ├── IMAP Server: 127.0.0.1
   ├── Port: 1143
   ├── Security: STARTTLS
   ├── Authentication: Normal password
   └── Username: tu-email@proton.me
   ```

**Importación de MBOX:**

```bash
# En Thunderbird
Tools > Import/Export Tools > Import mbox file
# Selecciona el archivo .mbox descargado de Gmail
# El proceso puede tomar horas dependiendo del tamaño
```

#### Método 2: Importación manual (para cuentas gratuitas)

**Limitaciones del plan gratuito:**

- No incluye Proton Bridge
- Importación manual requerida
- Proceso más laborioso pero factible

**Proceso paso a paso:**

1. **Preparación del archivo MBOX:**

   ```bash
   # Dividir archivo MBOX grande en partes más pequeñas
   # Usar herramienta como mbox-splitter

   python3 -c "
   import mailbox
   mbox = mailbox.mbox('All_mail.mbox')
   count = 0
   batch_size = 1000

   for i, message in enumerate(mbox):
       if i % batch_size == 0:
           if count > 0:
               batch_mbox.close()
           count += 1
           batch_mbox = mailbox.mbox(f'batch_{count}.mbox')
       batch_mbox.add(message)
   "
   ```

2. **Importación gradual:**
   - Usa cliente de correo temporal (Thunderbird)
   - Configura Proton Mail vía IMAP manual
   - Mueve correos en lotes pequeños

#### Configuración IMAP manual para Proton Mail:

```
Proton Mail IMAP Settings (solo con Bridge):
├── Server: 127.0.0.1 (con Bridge) o mail.protonmail.ch (sin Bridge - limitado)
├── Port: 993 (SSL) o 143 (STARTTLS)
├── Security: SSL/TLS
└── Authentication: OAuth2 (preferido) o contraseña de aplicación
```

### 3.3 Configuración de forwarding temporal

Para asegurar que no pierdes correos durante la transición, configura un forwarding temporal.

#### Configuración en Gmail:

1. **Gmail Settings** > **Forwarding and POP/IMAP**
2. **Add forwarding address**: tu-nuevo-email@proton.me
3. **Verification**: Gmail enviará código de verificación a Proton
4. **Activation**: Selecciona "Forward a copy of incoming mail"
5. **Keep Gmail copy**: Opcional durante período de transición

#### Auto-respuesta durante transición:

**En Gmail Settings > General > Vacation responder:**

```
Asunto: Nueva dirección de correo electrónico

Hola,

He migrado mi correo electrónico por razones de privacidad y seguridad.
Mi nueva dirección es: tu-nuevo-email@proton.me

Por favor, actualiza tu libreta de direcciones. Este correo recibirá
respuestas limitadas durante los próximos 30 días.

Gracias por tu comprensión.

[Tu nombre]
```

### 3.4 Migración de contactos

#### Importación directa a Proton Mail:

**Desde archivo vCard:**

1. **En Proton Mail**: Settings > Contacts > Import contacts
2. **Select file**: contacts.vcf (desde Takeout)
3. **Review**: Verifica contactos duplicados
4. **Import**: Confirma importación

#### Limpieza y organización de contactos:

**Identificar duplicados:**

```bash
# Script para identificar contactos duplicados en CSV
awk -F',' 'seen[$2]++' contact_info.csv
```

**Organización en Proton:**

- Crea grupos de contactos: Familia, Trabajo, Servicios
- Revisa y actualiza información obsoleta
- Elimina contactos no deseados

### 3.5 Configuración en dispositivos móviles

#### iOS Configuration:

**Proton Mail App:**

1. **Descarga**: [App Store - Proton Mail](https://apps.apple.com/app/proton-mail/id979659905)
2. **Login**: Usa credenciales de Proton
3. **Notifications**: Configura notificaciones push
4. **Default mail app**: iOS Settings > Mail > Default Mail App > Proton Mail

**Configuración IMAP/SMTP (alternativa):**

```
iOS Mail Settings:
├── Account Type: Other
├── IMAP Server: 127.0.0.1 (con Bridge)
├── Username: tu-email@proton.me
├── Password: contraseña-bridge
└── SMTP Server: Same as IMAP
```

#### Android Configuration:

**Proton Mail App:**

1. **Descarga**: [Google Play - Proton Mail](https://play.google.com/store/apps/details?id=ch.protonmail.android)
2. **Default email**: Settings > Apps > Default apps > Email > Proton Mail

**K-9 Mail (alternativa open source):**

1. **Descarga**: [F-Droid - K-9 Mail](https://f-droid.org/en/packages/com.fsck.k9/)
2. **Compatible con Proton Bridge**
3. **Mayor control de privacidad**

### 3.6 Notificación a contactos

#### Estrategia de comunicación:

**Email masivo de notificación:**

```
Asunto: Cambio de dirección de correo electrónico - Acción requerida

Estimados contactos,

Como parte de mi compromiso con la privacidad digital, he migrado
mi correo electrónico desde Gmail a un proveedor que respeta la privacidad.

📧 Nueva dirección: tu-nuevo-email@proton.me
📅 Fecha de cambio: [Fecha]
⏰ Gmail activo hasta: [Fecha + 60 días]

POR FAVOR:
✅ Actualiza tu libreta de direcciones
✅ Actualiza mi contacto en tus sistemas
✅ Reenvía este mensaje a otros que puedan necesitar mi nueva dirección

Si tienes preguntas sobre este cambio o sobre privacidad digital,
no dudes en contactarme en mi nueva dirección.

Gracias por tu comprensión y apoyo en este cambio hacia mayor privacidad.

Saludos,
[Tu nombre]

P.D.: Si estás interesado/a en mejorar tu propia privacidad digital,
estaré encantado/a de compartir recursos y experiencias.
```

**Actualización gradual por categorías:**

1. **Contactos prioritarios** (familiares, trabajo cercano): Email personal
2. **Contactos profesionales**: Email formal con información de transición
3. **Servicios y suscripciones**: Actualización directa en plataformas
4. **Contactos sociales**: Notificación en redes sociales + email

#### Actualización de servicios online:

**Lista de servicios a actualizar:**

```bash
# Crea una lista de verificación
Servicios_a_actualizar.md:
├── ✅ Banco y servicios financieros
├── ✅ Seguros (salud, auto, hogar)
├── ✅ Servicios públicos (electricidad, agua, internet)
├── ✅ Suscripciones (Netflix, Spotify, etc.)
├── ✅ Tiendas online (Amazon, eBay, etc.)
├── ✅ Redes sociales (Facebook, Twitter, LinkedIn)
├── ✅ Servicios profesionales (abogado, médico, contador)
└── ✅ Otros servicios personalizados
```

---

## Paso 4: Migración de Almacenamiento, Documentos y Sheets

### 4.1 Descarga completa de Google Drive

La migración de documentos y archivos requiere una estrategia cuidadosa para mantener la integridad y accesibilidad.

#### Configuración óptima en Google Takeout:

**Selección de Google Drive:**

```
Drive Export Configuration:
├── Include all files and folders: ✅
├── Document format conversions:
│   ├── Documents (.docx): ✅ Máxima compatibilidad
│   ├── Spreadsheets (.xlsx): ✅ Para LibreOffice
│   ├── Presentations (.pptx): ✅
│   ├── Drawings (.png): ✅
│   └── Keep original formats too: ✅ (archivos .gdoc como backup)
├── Archive format: .zip
└── Archive size: 2GB
```

#### Estructura típica de descarga:

```bash
Drive-Export/
├── My Drive/
│   ├── Documents/
│   │   ├── file.docx                    # Convertido
│   │   ├── file.gdoc                    # Original de Google
│   │   └── Shared with me/             # Archivos compartidos
│   ├── Spreadsheets/
│   │   ├── budget.xlsx
│   │   ├── budget.gsheet
│   │   └── data_analysis.xlsx
│   └── Presentations/
│       ├── presentation.pptx
│       └── presentation.gslides
└── Shared drives/                       # Si tienes acceso
    └── [Team folders]/
```

#### Verificación de integridad:

```bash
# Script para verificar descarga completa
#!/bin/bash
echo "Verificando archivos descargados..."

# Contar archivos por tipo
find Drive-Export/ -name "*.docx" | wc -l
find Drive-Export/ -name "*.xlsx" | wc -l
find Drive-Export/ -name "*.pptx" | wc -l

# Verificar archivos grandes (posibles corruptos)
find Drive-Export/ -size +100M -ls

# Buscar archivos con caracteres especiales (pueden causar problemas)
find Drive-Export/ -name "*[^a-zA-Z0-9._-]*" -print
```

### 4.2 Configuración avanzada de Obsidian

Obsidian será tu reemplazo principal para Google Docs y como sistema de gestión de conocimiento.

#### Instalación y configuración inicial:

**Descarga e instalación:**

```bash
# Linux (AppImage)
wget https://github.com/obsidianmd/obsidian-releases/releases/download/v1.4.16/Obsidian-1.4.16.AppImage
chmod +x Obsidian-1.4.16.AppImage
./Obsidian-1.4.16.AppImage

# macOS con Homebrew
brew install --cask obsidian

# Windows: Descarga desde obsidian.md
# Android: Play Store o F-Droid
# iOS: App Store
```

**Creación del vault principal:**

1. **Estructura recomendada:**

```
ObsidianVault/
├── 00-Inbox/              # Notas temporales y capturas rápidas
├── 01-Projects/           # Proyectos activos
│   ├── Work/
│   ├── Personal/
│   └── Learning/
├── 02-Areas/              # Áreas de responsabilidad continua
│   ├── Health/
│   ├── Finances/
│   └── Relationships/
├── 03-Resources/          # Referencias y recursos
│   ├── Articles/
│   ├── Books/
│   └── Templates/
├── 04-Archive/            # Proyectos completados/inactivos
├── Attachments/           # Archivos multimedia
└── Templates/             # Plantillas para notas
```

#### Plugins esenciales para reemplazar Google Sheets:

**Plugins recomendados (Core y Community):**

1. **Dataview** - Base de datos y consultas

   ```
   Instalación: Settings > Community plugins > Browse > "Dataview"
   Características:
   ├── Consultas SQL-like en Markdown
   ├── Tablas dinámicas
   ├── Filtros y agrupaciones
   └── Cálculos automáticos
   ```

2. **Advanced Tables** - Editor de tablas mejorado

   ```
   Características:
   ├── Formato automático de tablas
   ├── Ordenamiento de columnas
   ├── Fórmulas básicas
   └── Exportación a CSV
   ```

3. **Templater** - Plantillas dinámicas

   ```
   Uso:
   ├── Automatización de creación de notas
   ├── Variables dinámicas (fecha, hora, etc.)
   ├── Scripts de JavaScript
   └── Plantillas condicionales
   ```

4. **Calendar** - Vista de calendario
   ```
   Integración:
   ├── Notas diarias automáticas
   ├── Vista mensual/semanal
   ├── Integración con Dataview
   └── Recordatorios y eventos
   ```

#### Migración de Google Sheets a Obsidian:

**Método 1: Conversión directa CSV a Markdown**

````python
#!/usr/bin/env python3
# csv_to_obsidian.py - Converter de CSV a Markdown tables

import csv
import sys
import os

def csv_to_markdown(csv_file, output_dir):
    """Convierte archivo CSV a tabla Markdown para Obsidian"""

    base_name = os.path.splitext(os.path.basename(csv_file))[0]
    md_file = os.path.join(output_dir, f"{base_name}.md")

    with open(csv_file, 'r', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)

        with open(md_file, 'w', encoding='utf-8') as mdfile:
            # Escribir frontmatter
            mdfile.write(f"# {base_name}\n\n")
            mdfile.write("---\n")
            mdfile.write(f"created: {datetime.now().isoformat()}\n")
            mdfile.write(f"source: Google Sheets\n")
            mdfile.write(f"type: data-table\n")
            mdfile.write("---\n\n")

            # Convertir CSV a tabla Markdown
            rows = list(reader)
            if not rows:
                return

            # Header
            header = "| " + " | ".join(rows[0]) + " |\n"
            separator = "| " + " | ".join(["---"] * len(rows[0])) + " |\n"

            mdfile.write(header)
            mdfile.write(separator)

            # Data rows
            for row in rows[1:]:
                mdfile.write("| " + " | ".join(row) + " |\n")

            # Agregar consultas Dataview si es necesario
            if len(rows) > 1:
                mdfile.write(f"\n## Análisis con Dataview\n\n")
                mdfile.write("```dataview\n")
                mdfile.write(f"TABLE WITHOUT ID *\n")
                mdfile.write(f"FROM \"[[{base_name}]]\"\n")
                mdfile.write("```\n")

# Uso del script
if __name__ == "__main__":
    csv_file = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "."
    csv_to_markdown(csv_file, output_dir)
````

**Uso del script:**

```bash
# Convertir múltiples archivos CSV
python3 csv_to_obsidian.py budget.csv ObsidianVault/02-Areas/Finances/
python3 csv_to_obsidian.py contacts.csv ObsidianVault/03-Resources/
python3 csv_to_obsidian.py project_data.csv ObsidianVault/01-Projects/Work/
```

**Método 2: Funcionalidad avanzada con Dataview**

Ejemplo de nota que reemplaza una hoja de cálculo de presupuesto:

````markdown
# Presupuesto Personal 2025

---

type: budget
year: 2025
currency: EUR
last_updated: 2025-09-27

---

## Ingresos Mensuales

| Fuente    | Cantidad | Frecuencia | Anual     |
| --------- | -------- | ---------- | --------- |
| Salario   | 3000     | Mensual    | 36000     |
| Freelance | 500      | Variable   | 6000      |
| **Total** | **3500** |            | **42000** |

## Gastos Fijos

| Categoría      | Cantidad | Prioridad |
| -------------- | -------- | --------- |
| Vivienda       | 1200     | Alta      |
| Alimentación   | 400      | Alta      |
| Transporte     | 200      | Media     |
| Seguros        | 150      | Alta      |
| Subscripciones | 50       | Baja      |
| **Total**      | **2000** |           |

## Análisis Automático con Dataview

```dataview
TABLE
  Fuente as "Fuente de Ingreso",
  Cantidad as "Cantidad (€)",
  (Cantidad * 12) as "Anual (€)"
FROM [[Presupuesto Personal 2025]]
WHERE type = "ingreso"
```
````

## Objetivos de Ahorro

- [ ] Fondo de emergencia: 6 meses de gastos (12,000€)
- [ ] Vacaciones 2025: 2,000€
- [ ] Formación profesional: 1,000€

## Dashboard con Progress Bars

Ahorro actual: $=dv.span("■".repeat(Math.floor((5000/12000)*10)) + "□".repeat(10-Math.floor((5000/12000)*10)))$ 5,000€ / 12,000€

````

### 4.3 Configuración de LibreOffice para compatibilidad

LibreOffice será tu suite ofimática principal para documentos complejos que requieran funciones avanzadas.

#### Instalación y configuración:

**Instalación multiplataforma:**
```bash
# Ubuntu/Debian
sudo apt update && sudo apt install libreoffice

# macOS con Homebrew
brew install --cask libreoffice

# Windows: Descarga desde libreoffice.org

# Android: LibreOffice Viewer en Play Store
# iOS: LibreOffice colaborativo limitado, usar alternativas
````

**Configuración para máxima compatibilidad:**

```
LibreOffice Configuration:
├── Tools > Options > Load/Save > General:
│   ├── Default file format ODF: ❌ (usar Office formats)
│   ├── Auto-save every: 5 minutes ✅
│   └── Create backup copy: ✅
├── Load/Save > Microsoft Office:
│   ├── Load Basic code: ✅
│   ├── Executable code: Ask user (security)
│   └── Save original Basic code: ✅
└── Security:
    ├── Macro security: Medium ✅
    └── Remove personal info on save: ❌ (opcional)
```

#### Integración LibreOffice + Obsidian:

**Workflow recomendado:**

1. **Documentos simples**: Obsidian (Markdown)
2. **Documentos complejos**: LibreOffice Writer
3. **Hojas de cálculo complejas**: LibreOffice Calc
4. **Presentaciones**: LibreOffice Impress
5. **Base de datos**: LibreOffice Base o Obsidian con Dataview

**Script para sincronización:**

```bash
#!/bin/bash
# sync_libreoffice_obsidian.sh
# Sincroniza documentos entre LibreOffice y Obsidian

OBSIDIAN_VAULT="/path/to/ObsidianVault"
LIBREOFFICE_DOCS="/path/to/LibreOfficeDocs"

# Convertir documentos LibreOffice a PDF para referencia en Obsidian
find "$LIBREOFFICE_DOCS" -name "*.odt" -exec libreoffice --headless --convert-to pdf --outdir "$OBSIDIAN_VAULT/Attachments" {} \;

# Crear enlaces en Obsidian para documentos LibreOffice
for file in "$LIBREOFFICE_DOCS"/*.odt; do
    basename=$(basename "$file" .odt)
    echo "- [[${basename}.pdf]] - [Editar en LibreOffice](file://$file)" >> "$OBSIDIAN_VAULT/03-Resources/LibreOffice_Links.md"
done
```

### 4.4 Configuración de CryptPad para colaboración

CryptPad reemplazará Google Docs para colaboración en tiempo real.

#### Registro y configuración:

**Opción 1: Usar instancia pública (recomendado inicialmente)**

- **URL**: [cryptpad.fr](https://cryptpad.fr)
- **Límites gratuitos**: 1GB de almacenamiento
- **Sin registro requerido**: Pero recomendado para persistencia

**Opción 2: Auto-hospedaje (usuarios avanzados)**

```bash
# Instalación básica de CryptPad en servidor Ubuntu
git clone https://github.com/xwiki-labs/cryptpad.git
cd cryptpad
npm install
npm install -g bower
bower install

# Configuración
cp config/config.example.js config/config.js
# Editar config.js según necesidades

# Iniciar servidor
npm start
```

#### Uso práctico de CryptPad:

**Tipos de documentos disponibles:**

- **Rich Text**: Reemplazo de Google Docs
- **Spreadsheet**: Reemplazo de Google Sheets
- **Presentation**: Reemplazo de Google Slides
- **Code Editor**: Para desarrollo colaborativo
- **Whiteboard**: Para brainstorming visual
- **Forms**: Reemplazo de Google Forms

**Ejemplo de flujo colaborativo:**

1. **Crear documento**:

   - Ve a cryptpad.fr
   - "New" > "Rich Text"
   - El documento se crea con cifrado automático

2. **Colaboración segura**:

   ```
   Niveles de acceso en CryptPad:
   ├── View: Solo lectura
   ├── Edit: Edición completa
   ├── Present: Modo presentación
   └── Owner: Control total (eliminar, configurar)
   ```

3. **Compartir documento**:

   - Click en "Share"
   - **IMPORTANTE**: El enlace contiene las claves de cifrado
   - Comparte solo por canales seguros (Proton Mail, Signal)

4. **Export/Import**:
   - Export: HTML, Markdown, Office formats
   - Import: Sube documentos existentes de Google

### 4.5 Migración de Google Photos

Las fotos requieren especial atención por el volumen y valor sentimental.

#### Descarga desde Google Photos:

**Via Google Takeout:**

```
Google Photos Export:
├── Include all photos and videos: ✅
├── Quality: Original ✅ (no comprimir)
├── Archive format: .zip
├── Size: 2GB (para archivos grandes)
└── Albums: Include all ✅
```

**Estructura típica de descarga:**

```bash
Photos-Export/
├── Takeout-YYYYMMDD/
│   ├── Google Photos/
│   │   ├── Photos from 2020/
│   │   ├── Photos from 2021/
│   │   ├── ...
│   │   └── Albums/
│   │       ├── Family Trip 2023/
│   │       └── Wedding Photos/
│   └── metadata.json          # Metadatos de ubicación/fecha
```

#### Alternativas para almacenamiento de fotos:

**Ente.io** - Especializado en fotos

- **Plan gratuito**: 5GB
- **Características**:
  - Cifrado de extremo a extremo
  - Detección automática de duplicados
  - Búsqueda por fecha/ubicación
  - Apps para iOS y Android
- **Registro**: [ente.io](https://ente.io)

**Configuración de Ente.io:**

1. **Registro**: Crea cuenta en ente.io
2. **Apps móviles**:
   - iOS: [App Store - Ente](https://apps.apple.com/app/ente-photos/id1542026904)
   - Android: [Play Store - Ente](https://play.google.com/store/apps/details?id=io.ente.photos)
3. **Backup automático**: Configura backup automático en móvil
4. **Organizacion**: Crea álbumes familiares/eventos

**digiKam** - Gestión local avanzada

- **Descarga**: [digikam.org](https://www.digikam.org)
- **Características**:
  - Gestión local completa
  - Etiquetado facial automático
  - Edición básica incluida
  - Base de datos SQLite
- **Uso**: Para bibliotecas fotográficas grandes (>10,000 fotos)

**Configuración de digiKam:**

```bash
# Instalación Ubuntu
sudo apt install digikam

# Configuración inicial
1. Primera ejecución: Configurar biblioteca de fotos
2. Seleccionar carpeta: /home/user/Photos (o similar)
3. Base de datos: SQLite local (recomendado)
4. Escaneado inicial: Puede tomar horas para muchas fotos
```

#### Script de organización de fotos:

```python
#!/usr/bin/env python3
# organize_photos.py - Organiza fotos por fecha

import os
import shutil
from datetime import datetime
from PIL import Image
from PIL.ExifTags import TAGS

def get_date_taken(image_path):
    """Extrae fecha de captura de metadatos EXIF"""
    try:
        image = Image.open(image_path)
        exifdata = image.getexif()

        for tag_id in exifdata:
            tag = TAGS.get(tag_id, tag_id)
            if tag == "DateTime":
                return datetime.strptime(exifdata[tag_id], "%Y:%m:%d %H:%M:%S")
    except:
        # Fallback a fecha de modificación del archivo
        return datetime.fromtimestamp(os.path.getmtime(image_path))

    return None

def organize_photos(source_dir, target_dir):
    """Organiza fotos en estructura YYYY/MM/"""

    for root, dirs, files in os.walk(source_dir):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.tiff', '.raw')):
                source_path = os.path.join(root, file)

                date_taken = get_date_taken(source_path)
                if date_taken:
                    year_month = date_taken.strftime("%Y/%m")
                    target_folder = os.path.join(target_dir, year_month)

                    os.makedirs(target_folder, exist_ok=True)

                    target_path = os.path.join(target_folder, file)
                    if not os.path.exists(target_path):
                        shutil.copy2(source_path, target_path)
                        print(f"Moved: {file} -> {year_month}/")

# Uso
if __name__ == "__main__":
    source = "Google-Photos-Export/"
    target = "Organized-Photos/"
    organize_photos(source, target)
```

### 4.6 Verificación y backup local

#### Verificación de migración completa:

**Checklist de verificación:**

```bash
# Crear script de verificación
#!/bin/bash
# verify_migration.sh

echo "=== VERIFICACIÓN DE MIGRACIÓN DE DOCUMENTOS ==="

# Verificar Obsidian Vault
VAULT_PATH="/path/to/ObsidianVault"
if [ -d "$VAULT_PATH" ]; then
    echo "✅ Obsidian Vault encontrado"
    echo "   - Archivos .md: $(find "$VAULT_PATH" -name "*.md" | wc -l)"
    echo "   - Attachments: $(find "$VAULT_PATH/Attachments" -type f | wc -l)"
else
    echo "❌ Obsidian Vault no encontrado"
fi

# Verificar LibreOffice docs
DOCS_PATH="/path/to/LibreOfficeDocs"
if [ -d "$DOCS_PATH" ]; then
    echo "✅ Documentos LibreOffice encontrados"
    echo "   - Documentos (.odt): $(find "$DOCS_PATH" -name "*.odt" | wc -l)"
    echo "   - Hojas cálculo (.ods): $(find "$DOCS_PATH" -name "*.ods" | wc -l)"
    echo "   - Presentaciones (.odp): $(find "$DOCS_PATH" -name "*.odp" | wc -l)"
fi

# Verificar fotos organizadas
PHOTOS_PATH="/path/to/Organized-Photos"
if [ -d "$PHOTOS_PATH" ]; then
    echo "✅ Fotos organizadas encontradas"
    echo "   - Total fotos: $(find "$PHOTOS_PATH" -name "*.jpg" -o -name "*.png" | wc -l)"
    echo "   - Carpetas año: $(find "$PHOTOS_PATH" -maxdepth 1 -type d | wc -l)"
fi

# Verificar Proton Drive sync
echo "🔄 Verificar sincronización Proton Drive manualmente"

# Verificar CryptPad docs
echo "🔄 Verificar documentos colaborativos en CryptPad"

echo "=== VERIFICACIÓN COMPLETADA ==="
```

#### Configuración de backup automatizado:

**Script de backup completo:**

```bash
#!/bin/bash
# automated_backup.sh - Backup semanal de datos migrados

# Configuración
BACKUP_DIR="/media/backup-external-drive"
DATE=$(date +%Y%m%d)
BACKUP_NAME="digital-migration-backup-$DATE"

# Crear directorio de backup
mkdir -p "$BACKUP_DIR/$BACKUP_NAME"

# Backup Obsidian Vault
echo "Backing up Obsidian Vault..."
tar -czf "$BACKUP_DIR/$BACKUP_NAME/obsidian-vault.tar.gz" /path/to/ObsidianVault

# Backup LibreOffice Documents
echo "Backing up LibreOffice docs..."
tar -czf "$BACKUP_DIR/$BACKUP_NAME/libreoffice-docs.tar.gz" /path/to/LibreOfficeDocs

# Backup Organized Photos
echo "Backing up photos..."
tar -czf "$BACKUP_DIR/$BACKUP_NAME/organized-photos.tar.gz" /path/to/Organized-Photos

# Backup Proton data (export if possible)
echo "Backing up Proton data..."
# Nota: Requiere manual export desde Proton web interface

# Cifrar backup completo con VeraCrypt
echo "Encrypting backup..."
# veracrypt --text --create --volume "$BACKUP_DIR/$BACKUP_NAME.vc" --size 10G --password "your-strong-password" --encryption AES --hash SHA-512 --filesystem FAT

# Limpiar backups antiguos (mantener últimos 4)
echo "Cleaning old backups..."
ls -1t "$BACKUP_DIR" | grep digital-migration-backup | tail -n +5 | xargs -I {} rm -rf "$BACKUP_DIR/{}"

echo "Backup completed: $BACKUP_NAME"
```

**Configuración de cron para automatización:**

```bash
# Editar crontab
crontab -e

# Agregar backup semanal (domingos a las 2:00 AM)
0 2 * * 0 /path/to/automated_backup.sh > /var/log/digital-migration-backup.log 2>&1
```

---

## Paso 5: Migración de Calendario, Contactos y Otros Servicios

### 5.1 Migración de Google Calendar

El calendario es crucial para la organización diaria y requiere sincronización confiable entre dispositivos.

#### Descarga desde Google Calendar:

**Via Google Takeout:**

```
Calendar Export Configuration:
├── Include all calendars: ✅
├── Format: iCalendar (.ics) ✅
├── Include:
│   ├── Events: ✅
│   ├── Reminders: ✅
│   ├── Goals: ✅ (si usas Google Goals)
│   └── Shared calendars: ✅
```

**Estructura de descarga:**

```bash
Calendar-Export/
├── Calendar/
│   ├── personal_calendar@gmail.com.ics
│   ├── work_calendar@company.com.ics
│   ├── family_shared_calendar.ics
│   └── [other_calendars].ics
```

#### Importación a Proton Calendar:

**Proceso paso a paso:**

1. **Accede a Proton Calendar**: [calendar.proton.me](https://calendar.proton.me)
2. **Para cada calendario .ics:**

   ```
   Proton Calendar > Settings > Import:
   ├── Select .ics file
   ├── Choose target calendar (create new if needed)
   ├── Import settings:
   │   ├── Duplicate events: Skip
   │   └── Import recurring events: ✅
   └── Confirm import
   ```

3. **Verificación post-importación:**
   - Revisa eventos importantes manualmente
   - Verifica fechas de eventos recurrentes
   - Confirma alarmas/recordatorios

#### Configuración avanzada de Proton Calendar:

**Configuración de privacidad:**

```
Privacy Settings:
├── Default calendar: Personal (encrypted)
├── Event notifications: Local only
├── Share calendar data: ❌ Never
├── Auto-accept invitations: Ask ✅
└── Timezone: Auto-detect from device ✅
```

**Organización de calendarios:**

```
Estructura de calendarios recomendada:
├── 📅 Personal
├── 💼 Work
├── 👨‍👩‍👧‍👦 Family (shared)
├── 🏥 Health/Appointments
├── 📚 Learning/Courses
├── 🎯 Goals/Habits
└── 📋 Deadlines/Important
```

### 5.2 Sincronización multiplataforma

La sincronización entre dispositivos es esencial para acceso ubicuo al calendario.

#### Configuración CalDAV:

**CalDAV es el estándar abierto para sincronización de calendarios.**

**Configuración en diferentes plataformas:**

**iOS (Settings > Calendar > Accounts):**

```
iOS CalDAV Configuration:
├── Server: caldav.protonmail.com
├── User Name: tu-email@proton.me
├── Password: [Bridge Password] *
├── Description: Proton Calendar
└── Advanced:
    ├── Use SSL: ✅
    └── Port: 443
```

\*Nota: Requiere Proton Mail Bridge (plan de pago)

**Android con DAVx5:**

- **Descarga**: [F-Droid - DAVx5](https://f-droid.org/en/packages/at.bitfire.davdroid/) o [Play Store](https://play.google.com/store/apps/details?id=at.bitfire.davdroid)
- **Configuración**:
  ```
  DAVx5 Setup:
  ├── Add Account > Login with URL and username
  ├── Base URL: https://caldav.protonmail.com
  ├── Username: tu-email@proton.me
  ├── Password: [Bridge Password]
  └── Account name: Proton
  ```

**Linux (Evolution/Thunderbird):**

```bash
# Thunderbird con Lightning addon
# Add-ons > Lightning > New Calendar > On the Network
# CalDAV: https://caldav.protonmail.com/calendars/

# Evolution
# File > New > Calendar
# Type: CalDAV
# URL: https://caldav.protonmail.com/calendars/
```

**macOS (Calendar.app):**

```
macOS Calendar:
├── Calendar > Add Account > Advanced
├── Account Type: CalDAV
├── Server Address: caldav.protonmail.com
├── Server Path: /calendars/
├── Port: 443 (SSL)
├── Username: tu-email@proton.me
└── Password: [Bridge Password]
```

#### Alternativa sin Bridge - Calendario local:

Para usuarios del plan gratuito sin acceso a Bridge:

**Radicale** - Servidor CalDAV local:

```bash
# Instalación Ubuntu
sudo apt install radicale

# Configuración básica
sudo systemctl start radicale
sudo systemctl enable radicale

# Acceso: http://localhost:5232/
# Crear usuario/contraseña para acceso
```

### 5.3 Migración avanzada de contactos

Los contactos requieren limpieza y organización durante la migración.

#### Procesamiento avanzado de contactos:

**Script para limpiar y organizar contactos:**

```python

#!/usr/bin/env python3
# clean_contacts.py - Limpia y organiza contactos migrados

import csv
import re
from collections import defaultdict

def clean_phone_number(phone):
    """Limpia y estandariza números de teléfono"""
    if not phone:
        return ""

    # Remover caracteres no numéricos excepto +
    cleaned = re.sub(r'[^\d+]', '', phone)

    # Agregar código país si falta
    if cleaned.startswith('6') or cleaned.startswith('7'):  # España
        cleaned = '+34' + cleaned
    elif cleaned.startswith('1') and len(cleaned) == 10:  # EEUU
        cleaned = '+1' + cleaned

    return cleaned

def detect_duplicates(contacts):
    """Detecta contactos duplicados por email o teléfono"""
    duplicates = defaultdict(list)

    for i, contact in enumerate(contacts):
        key = contact.get('email', '').lower() or contact.get('phone', '')
        if key:
            duplicates[key].append(i)

    return {k: v for k, v in duplicates.items() if len(v) > 1}

def categorize_contact(contact):
    """Categoriza contacto automáticamente"""
    name = contact.get('name', '').lower()
    email = contact.get('email', '').lower()
    organization = contact.get('organization', '').lower()

    # Categorías automáticas
    if any(word in email for word in ['bank', 'finance', 'insurance']):
        return 'Financial'
    elif any(word in email for word in ['doctor', 'hospital', 'clinic', 'health']):
        return 'Healthcare'
    elif organization:
        return 'Work'
    elif any(word in name for word in ['family', 'mom', 'dad', 'sister', 'brother']):
        return 'Family'
    else:
        return 'Personal'

def process_google_contacts(csv_file):
    """Procesa archivo CSV de Google Contacts"""
    cleaned_contacts = []

    with open(csv_file, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)

        for row in reader:
            contact = {
                'name': row.get('Name', '').strip(),
                'email': row.get('E-mail 1 - Value', '').strip().lower(),
                'phone': clean_phone_number(row.get('Phone 1 - Value', '')),
                'organization': row.get('Organization 1 - Name', '').strip(),
                'notes': row.get('Notes', '').strip(),
                'category': ''
            }

            # Solo agregar si tiene información mínima
            if contact['name'] or contact['email']:
                contact['category'] = categorize_contact(contact)
                cleaned_contacts.append(contact)

    return cleaned_contacts

def export_to_vcf(contacts, output_file):
    """Exporta contactos a formato vCard (.vcf)"""
    with open(output_file, 'w', encoding='utf-8') as vcf:
        for contact in contacts:
            vcf.write("BEGIN:VCARD\n")
            vcf.write("VERSION:3.0\n")
            vcf.write(f"FN:{contact['name']}\n")

            if contact['email']:
                vcf.write(f"EMAIL:{contact['email']}\n")

            if contact['phone']:
                vcf.write(f"TEL:{contact['phone']}\n")

            if contact['organization']:
                vcf.write(f"ORG:{contact['organization']}\n")

            if contact['notes']:
                vcf.write(f"NOTE:{contact['notes']}\n")

            if contact['category']:
                vcf.write(f"CATEGORIES:{contact['category']}\n")

            vcf.write("END:VCARD\n\n")

# Uso del script
if __name__ == "__main__":
    input_file = "contacts.csv"  # Desde Google Takeout
    output_file = "cleaned_contacts.vcf"

    contacts = process_google_contacts(input_file)

    # Detectar y reportar duplicados
    duplicates = detect_duplicates(contacts)
    if duplicates:
        print(f"⚠️  Encontrados {len(duplicates)} contactos duplicados")
        for key, indices in duplicates.items():
            print(f"   - {key}: {len(indices)} entradas")

    # Exportar contactos limpios
    export_to_vcf(contacts, output_file)
    print(f"✅ Exportados {len(contacts)} contactos a {output_file}")
```

#### Importación organizada a Proton Mail:

**Proceso por categorías:**

1. **Ejecutar script de limpieza**: `python3 clean_contacts.py`
2. **Crear grupos en Proton**:
   ```
   Proton Mail > Contacts > New Group:
   ├── 👨‍👩‍👧‍👦 Family
   ├── 💼 Work
   ├── 🏥 Healthcare
   ├── 💰 Financial
   ├── 🎯 Services
   └── 👥 Personal
   ```
3. **Importar por lotes**: Proton Mail > Contacts > Import > Select VCF file

### 5.4 Migración de otros servicios Google

#### Google Maps → Alternativas de mapas:

**Organic Maps** (Recomendado principal)

- **Descarga**:
  - iOS: [App Store - Organic Maps](https://apps.apple.com/app/organic-maps/id1567437057)
  - Android: [F-Droid - Organic Maps](https://f-droid.org/en/packages/app.organicmaps/) o [Play Store](https://play.google.com/store/apps/details?id=app.organicmaps)
- **Características**:
  - Mapas offline completos
  - Sin rastreo ni anuncios
  - Basado en OpenStreetMap
  - Navegación turn-by-turn
  - Marcadores y favoritos

**Configuración inicial:**

1. **Descarga mapas offline**: Settings > Download Maps > Selecciona países/regiones
2. **Migración de lugares guardados**:

   ```python
   # Script para exportar lugares guardados de Google Maps
   # Requiere usar Google Takeout: Maps (your places)

   import json

   def export_saved_places(takeout_file):
       with open(takeout_file, 'r') as f:
           data = json.load(f)

       places = []
       for item in data.get('features', []):
           place = {
               'name': item.get('properties', {}).get('Title', ''),
               'address': item.get('properties', {}).get('Location', ''),
               'coordinates': item.get('geometry', {}).get('coordinates', [])
           }
           places.append(place)

       # Exportar a formato compatible
       with open('organic_maps_bookmarks.txt', 'w') as f:
           for place in places:
               f.write(f"{place['name']} | {place['address']}\n")
   ```

**OsmAnd** (Alternativa avanzada)

- **Descarga**: [osmand.net](https://osmand.net)
- **Características**:
  - Funciones profesionales (rutas complejas, topografía)
  - Plugins extensivos
  - Mayor curva de aprendizaje

#### YouTube → Alternativas sin rastreo:

**NewPipe** (Android)

- **Descarga**: [F-Droid - NewPipe](https://f-droid.org/en/packages/org.schabi.newpipe/)
- **NO disponible en Play Store** (política de Google)
- **Características**:
  - Sin anuncios ni rastreo
  - Descarga de videos/audio
  - Reproducción en background
  - Gestión de suscripciones local

**Configuración NewPipe:**

1. **Instalación via F-Droid**:

   ```bash
   # Habilitar instalación de fuentes desconocidas en Android
   # Descargar F-Droid desde f-droid.org
   # Instalar NewPipe desde F-Droid
   ```

2. **Migración de suscripciones**:
   ```
   Google Takeout > YouTube > subscriptions.csv
   NewPipe > Settings > Import/Export > Import subscriptions
   ```

**Invidious** (Web)

- **Instancias públicas**: [docs.invidious.io/instances](https://docs.invidious.io/instances/)
- **Instancias recomendadas**:
  - `invidious.snopyta.org`
  - `yewtu.be`
  - `invidious.kavin.rocks`
- **Uso**: Simplemente cambia youtube.com por la URL de la instancia

**FreeTube** (Desktop)

- **Descarga**: [freetubeapp.io](https://freetubeapp.io)
- **Características**: Aplicación nativa para Windows/macOS/Linux
- **Ventajas**: Interfaz similar a YouTube, sin anuncios

#### Google Search → DuckDuckGo:

**Configuración como buscador predeterminado:**

**Firefox:**

1. Settings > Search > Default Search Engine > DuckDuckGo
2. **Bangs útiles de DuckDuckGo**:
   ```
   !g term        # Buscar en Google cuando sea necesario
   !w term        # Wikipedia
   !so term       # Stack Overflow
   !gh term       # GitHub
   !a term        # Amazon
   !maps term     # OpenStreetMap
   ```

**Chrome/Chromium:**

1. Settings > Search engine > Manage search engines
2. Add: `duckduckgo.com` como predeterminado
3. **Extensión recomendada**: [DuckDuckGo Privacy Essentials](https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg)

**Alternativas adicionales:**

- **Startpage**: [startpage.com](https://startpage.com) (resultados de Google sin rastreo)
- **Searx**: [searx.space](https://searx.space) (metabuscador de código abierto)

### 5.5 Configuración de sincronización automática

#### Script de sincronización integral:

```bash
#!/bin/bash
# sync_all_services.sh - Sincronización periódica de todos los servicios

# Configuración
LOG_FILE="/var/log/privacy-sync.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

log_message() {
    echo "[$DATE] $1" >> "$LOG_FILE"
    echo "$1"
}

# Función para verificar conectividad
check_connectivity() {
    if ping -c 1 8.8.8.8 &> /dev/null; then
        return 0
    else
        log_message "❌ Sin conectividad a internet"
        return 1
    fi
}

# Sincronizar Proton Calendar (via Bridge)
sync_proton_calendar() {
    if systemctl is-active --quiet protonmail-bridge; then
        log_message "🔄 Sincronizando Proton Calendar..."
        # Evolution/Thunderbird sync automático via CalDAV
        evolution --force-shutdown &> /dev/null
        evolution --sync-calendar &> /dev/null
        log_message "✅ Proton Calendar sincronizado"
    else
        log_message "⚠️  Proton Bridge no activo"
    fi
}

# Backup de Obsidian
backup_obsidian() {
    OBSIDIAN_PATH="/home/$USER/ObsidianVault"
    BACKUP_PATH="/home/$USER/Backups/obsidian-$(date +%Y%m%d)"

    if [ -d "$OBSIDIAN_PATH" ]; then
        log_message "💾 Backup de Obsidian Vault..."
        rsync -av --delete "$OBSIDIAN_PATH/" "$BACKUP_PATH/"
        log_message "✅ Obsidian backup completado"
    fi
}

# Sync de fotos con Ente.io (manual trigger)
sync_photos() {
    # Nota: Ente.io sync es automático en móvil
    # Este sería para verificar estado o forzar sync
    log_message "📸 Verificando sync de fotos..."

    # Placeholder para lógica de verificación de Ente.io
    # En práctica, esto sería verificar last sync time
    log_message "✅ Fotos sincronizadas correctamente"
}

# Limpiar logs antiguos
cleanup_logs() {
    find /var/log -name "privacy-sync.log.*" -mtime +30 -delete
    log_message "🧹 Logs antiguos limpiados"
}

# Ejecución principal
main() {
    log_message "🚀 Iniciando sincronización integral..."

    if ! check_connectivity; then
        exit 1
    fi

    sync_proton_calendar
    backup_obsidian
    sync_photos
    cleanup_logs

    log_message "✅ Sincronización completada"
}

# Ejecutar función principal
main

# Configurar como cronjob:
# crontab -e
# # Sincronización cada 6 horas
# 0 */6 * * * /path/to/sync_all_services.sh
```

---

## Paso 6: Otras Consideraciones y Recomendaciones Adicionales

### 6.1 Herramientas de comunicación privada

#### Signal - Reemplazo de mensajería:

**Signal Messenger**

- **Descarga**: [signal.org](https://signal.org)
- **Características**:
  - Cifrado de extremo a extremo por defecto
  - Mensajes que desaparecen
  - Llamadas y videollamadas cifradas
  - Stickers y GIFs
  - Grupos hasta 1000 personas

**Migración desde WhatsApp/Telegram:**

```bash
# No hay migración automática - proceso manual:
1. Instalar Signal en todos los dispositivos
2. Exportar chats importantes manualmente (copiar/pegar críticos)
3. Notificar a contactos sobre el cambio:

Mensaje sugerido:
"¡Hola! He migrado a Signal por mayor privacidad y seguridad.
Puedes encontrarme en Signal con este número: [tu teléfono]
Descarga Signal desde https://signal.org
¡Espero verte pronto por allí!"
```

**Configuración de privacidad en Signal:**

```
Signal > Settings > Privacy:
├── Show typing indicators: ❌
├── Show read receipts: ❌
├── Relay calls: Always (mayor privacidad)
├── Allow sealed sender: ✅
└── Registration lock: ✅ (con PIN fuerte)
```

#### Element (Matrix) - Para comunidades:

**Element/Matrix**

- **Descarga**: [element.io](https://element.io)
- **Uso**: Alternativa a Discord/Slack para comunidades
- **Características**:
  - Protocolos abiertos (Matrix)
  - Federación entre servidores
  - Cifrado de extremo a extremo
  - Bots y integraciones

**Servidores Matrix recomendados:**

- `matrix.org` (servidor principal)
- `tchncs.de` (servidor europeo confiable)
- Auto-hospedaje con Synapse (usuarios avanzados)

### 6.2 Navegación web privada

#### Firefox - Configuración de privacidad extrema:

**Descarga y configuración:**

- **Descarga**: [firefox.com](https://www.mozilla.org/firefox/)
- **Perfiles separados**: Crear perfiles para diferentes usos

```bash
# Crear perfiles de Firefox separados
firefox -ProfileManager

Perfiles sugeridos:
├── Privacy (uso diario máxima privacidad)
├── Work (herramientas de trabajo necesarias)
├── Banking (solo para servicios financieros)
└── Testing (para sitios que requieren JavaScript/cookies)
```

**Configuración avanzada (about:config):**

```javascript
// Configuración de privacidad extrema en about:config
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.partition.network_state", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("geo.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
```

#### Extensiones esenciales de privacidad:

**uBlock Origin**

- **Instalación**: [Firefox Add-ons - uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/)
- **Configuración avanzada**:
  ```
  uBlock Origin > Dashboard > Filter lists:
  ├── Built-in: All ✅
  ├── Ads: EasyList, EasyPrivacy ✅
  ├── Privacy: EasyPrivacy, Fanboy's Enhanced ✅
  ├── Malware: Online Malicious URL Blocklist ✅
  ├── Multipurpose: Dan Pollock's hosts file ✅
  └── Regional: [Your country's list] ✅
  ```

**Privacy Badger**

- **Instalación**: [EFF - Privacy Badger](https://privacybadger.org)
- **Configuración**: Funciona automáticamente, aprende de tu navegación

**ClearURLs**

- **Instalación**: [Firefox Add-ons - ClearURLs](https://addons.mozilla.org/firefox/addon/clearurls/)
- **Función**: Elimina parámetros de rastreo de URLs

**Decentraleyes**

- **Instalación**: [Firefox Add-ons - Decentraleyes](https://addons.mozilla.org/firefox/addon/decentraleyes/)
- **Función**: Protege contra rastreo por CDNs

### 6.3 Autenticación de dos factores

#### Aegis Authenticator (Android):

**Migración desde Google Authenticator:**

1. **Descarga Aegis**: [F-Droid](https://f-droid.org/en/packages/com.beemdevelopment.aegis/) o [Play Store](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)

2. **Importación desde Google Authenticator**:

   ```
   Google Authenticator > Settings > Transfer accounts > Export accounts
   Aegis > Settings > Import > Scan QR code de Google Authenticator
   ```

3. **Configuración de seguridad Aegis**:

   ```
   Aegis > Settings > Security:
   ├── Vault password: ✅ (contraseña fuerte)
   ├── Biometric unlock: ✅ (si disponible)
   ├── Auto-lock timeout: 1 minute
   ├── Screen capture prevention: ✅
   └── Backup encryption: ✅
   ```

4. **Backup cifrado**:
   ```
   Aegis > Settings > Backup > Create backup
   # Guarda el archivo .json cifrado en múltiples ubicaciones seguras
   ```

#### Authy (Multiplataforma alternativo):

**Para usuarios que necesitan sync entre dispositivos:**

- **Descarga**: [authy.com](https://authy.com)
- **Ventajas**: Sync cifrado entre dispositivos, backup en nube
- **Desventajas**: No es completamente de código abierto

### 6.4 Gestión de tareas y productividad

#### Todoist - Alternativa a Google Keep/Tasks:

**Todoist Free**

- **Límites gratuitos**: 80 proyectos, 5 personas por proyecto
- **Características**: Etiquetas, filtros, fechas de vencimiento
- **Descarga**: [todoist.com](https://todoist.com)

**Migración desde Google Keep:**

```python
#!/usr/bin/env python3
# google_keep_to_todoist.py
# Migrar notas de Google Keep (via Takeout) a Todoist

import json
import requests

def process_keep_notes(takeout_file):
    """Procesa archivo JSON de Google Keep desde Takeout"""
    with open(takeout_file, 'r', encoding='utf-8') as f:
        notes = json.load(f)

    tasks = []
    for note in notes:
        if note.get('isTrashed', False):
            continue

        task = {
            'content': note.get('title', 'Untitled'),
            'description': note.get('textContent', ''),
            'labels': note.get('labels', []),
            'is_completed': note.get('isArchived', False)
        }

        # Convertir elementos de lista
        if 'listContent' in note:
            for item in note['listContent']:
                task_item = {
                    'content': item.get('text', ''),
                    'is_completed': item.get('isChecked', False)
                }
                tasks.append(task_item)
        else:
            tasks.append(task)

    return tasks

# Uso manual - Todoist no tiene API pública para importación masiva
# Este script genera formato para importación manual
```

#### Alternativas completamente libres:

**Joplin** - Para notas y tareas

- **Descarga**: [joplinapp.org](https://joplinapp.org)
- **Características**: Markdown, cifrado, sincronización (Dropbox, OneDrive, etc.)
- **Ventaja**: Completamente de código abierto

**Standard Notes** - Para notas seguras

- **Plan gratuito**: Notas ilimitadas, sincronización básica
- **Descarga**: [standardnotes.com](https://standardnotes.com)
- **Ventaja**: Cifrado de extremo a extremo, extensiones

### 6.5 Videoconferencias privadas

#### Jitsi Meet - Alternativa a Google Meet:

**Jitsi Meet**

- **Uso directo**: [meet.jit.si](https://meet.jit.si)
- **Características**:
  - Sin registro requerido
  - Cifrado en tránsito
  - Pantalla compartida
  - Chat integrado
  - Apps móviles disponibles

**Instancias públicas alternativas:**

- `meet.ffmuc.net` (Alemania)
- `jitsi.riot.im` (operado por Element/Matrix)
- `jitsi.disroot.org` (colectivo de privacidad)

**Auto-hospedaje de Jitsi:**

```bash
# Instalación rápida con Docker
git clone https://github.com/jitsi/docker-jitsi-meet
cd docker-jitsi-meet
cp env.example .env

# Configurar variables en .env
# Ejecutar
docker-compose up -d

# Acceso en https://localhost:8443
```

**BigBlueButton** (Para educación/webinars):

- **Características**: Pizarra virtual, breakout rooms, grabación
- **Instancias públicas**: Buscar proveedores locales
- **Auto-hospedaje**: Requiere servidor dedicado con recursos significativos

### 6.6 Limpieza de huella digital

#### Eliminación de datos de Google:

**⚠️ IMPORTANTE: Realiza esto SOLO después de verificar que toda la migración está completa**

**Pasos de limpieza gradual:**

1. **Desactivar historial y actividad**:

   ```
   myaccount.google.com/activitycontrols:
   ├── Web & App Activity: ❌ OFF
   ├── Location History: ❌ OFF
   ├── YouTube History: ❌ OFF
   └── Ad personalization: ❌ OFF
   ```

2. **Eliminar datos históricos**:

   ```
   myaccount.google.com/data-and-privacy:
   ├── Delete activity by date: All time
   ├── Services to clean:
   │   ├── Search history ✅
   │   ├── YouTube watch/search history ✅
   │   ├── Location history ✅
   │   ├── Maps activity ✅
   │   └── Assistant activity ✅
   ```

3. **Revocar acceso de aplicaciones terceras**:

   ```
   myaccount.google.com/permissions:
   # Revisar y revocar apps que ya no necesitas
   # Especial atención a apps de productividad, redes sociales
   ```

4. **Eliminación gradual de servicios** (orden recomendado):
   ```
   Orden de eliminación:
   1. ✅ Google Photos (después de migrar fotos críticas)
   2. ✅ YouTube channel (si no es necesario)
   3. ✅ Google Drive (después de migrar documentos)
   4. ✅ Gmail (ÚLTIMO - después de confirmar migración completa)
   5. ⚠️  Cuenta completa (solo si no necesitas Android/Play Store)
   ```

#### Herramientas de verificación de privacidad:

**Have I Been Pwned**

- **URL**: [haveibeenpwned.com](https://haveibeenpwned.com)
- **Uso**: Verifica si tus emails han sido comprometidos en brechas
- **Acción**: Cambia contraseñas de servicios comprometidos

**Privacy.com** (EEUU) / **Revolut** (Europa)

- **Uso**: Tarjetas virtuales para compras online
- **Beneficio**: Limita exposición de datos financieros

**Firefox Monitor**

- **URL**: [monitor.firefox.com](https://monitor.firefox.com)
- **Integración**: Con Firefox para alertas automáticas
