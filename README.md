# Wallet Guard

Wallet Guard es una aplicación web para el control de gastos personales diseñada para ayudarte a administrar tus finanzas de manera sencilla y eficiente. Construida con tecnologías modernas, esta aplicación permite registrar gastos, visualizar el total gastado y recibir alertas sobre tu consumo.

## 🚀 Características

- **Registro de Gastos**: Agrega fácilmente nuevos gastos con detalle del concepto y monto.
- **Visualización de Gastos**: Tus gastos se muestran en tarjetas individuales para una fácil lectura.
- **Estadísticas en Tiempo Real**: Calculadora automática del total gastado.
- **Alertas de Consumo**: Recibe advertencias visuales cuando tus gastos superan ciertos límites (ej. > $500).
- **Persistencia de Datos**: Tus datos se guardan localmente en el navegador, por lo que no pierdes tu información al recargar.
- **Notificaciones**: Feedback instantáneo al agregar elementos.

## 🛠️ Tecnologías Utilizadas

- **[React 19](https://react.dev/)**: Biblioteca para la interfaz de usuario.
- **[TypeScript](https://www.typescriptlang.org/)**: Para un código más robusto y tipado seguro.
- **[Vite](https://vitejs.dev/)**: Entorno de desarrollo rápido.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Estilizado moderno y responsivo.
- **[Sonner](https://sonner.emilkowal.ski/)**: Para notificaciones tipo toast elegantes.

## 📦 Instalación y Uso

1. **Clonar el repositorio** (si aplica)
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd wallet-guard
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

## 📂 Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar el mantenimiento:

- `src/components`: Contiene los componentes de UI (Formulario de gasto, Tarjetas de información y gasto).
- `src/hooks`: Hooks personalizados, incluyendo la lógica de persistencia en LocalStorage.
- `src/App.tsx`: Componente principal que orquesta la lógica de la aplicación.
- `src/layout.tsx`: Definición del layout general de la aplicación.

---

Desarrollado con ❤️ para ayudarte a cuidar tu billetera.
