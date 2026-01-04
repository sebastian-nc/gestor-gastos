interface ITarjetaInformacion {
    titulo: string;
    texto: string;
    children?: React.ReactNode;
}


export function TarjetaInformacion({ titulo, texto, children }: ITarjetaInformacion) {
    return (
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{titulo}</h3>
            <p className="text-lg font-semibold text-gray-800">{texto}</p>
            {
                children
            }
        </div>
    )
}