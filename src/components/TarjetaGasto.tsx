interface Prop {
    concepto: string;
    monto: number;
    fecha: number;
}


export function TarjetaGasto({ concepto, monto, fecha }: Prop) {
    return (
        <div className="group flex flex-col bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.15em] mb-4 opacity-80">{concepto}</h3>
            <div className="flex items-center gap-4">
                <div className={'w-1.5 h-12 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.2)] ' + (monto < 20 ? 'bg-green-500' : monto > 50 ? 'bg-red-500' : 'bg-gray-500')} />
                <div className="flex flex-1 items-end justify-between">
                    <p className="text-2xl font-extrabold text-gray-900 tracking-tight">${monto}</p>
                    <p className="text-xs font-semibold text-gray-400 pb-1">{new Date(fecha).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    )
}