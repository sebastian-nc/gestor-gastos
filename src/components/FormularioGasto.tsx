import { useEffect, useRef, useState } from "react";

interface Props {
    onAgregar: (concepto: string, monto: number) => void;
}

export function FormularioGasto({ onAgregar }: Props) {

    const inputConcepto = useRef<HTMLInputElement | null>(null);

    const [concepto, setConcepto] = useState('');
    const [monto, setMonto] = useState(0);


    function guadarDatos(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const concepto = e.currentTarget.concepto.value;
        const monto = e.currentTarget.monto.value;
        onAgregar(concepto, Number(monto));

        // Focus en el input concepto
        inputConcepto.current?.focus();

        setConcepto('');
        setMonto(0);
    }

    useEffect(() => {
        inputConcepto.current?.focus();
    }, [])

    return (
        <form onSubmit={guadarDatos} className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto">
            <div className="space-y-2">
                <label htmlFor="concepto" className="block text-sm font-semibold text-gray-700">Concepto</label>
                <input
                    type="text"
                    name="concepto"
                    id="concepto"
                    placeholder="Ej: Hamburguesa"
                    ref={inputConcepto}
                    value={concepto}
                    onChange={(e) => setConcepto(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="monto" className="block text-sm font-semibold text-gray-700">Monto</label>
                <input
                    type="number"
                    name="monto"
                    id="monto"
                    placeholder="Ej: 20"
                    value={monto}
                    onChange={(e) => setMonto(Number(e.target.value))}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
            </div>
            <button
                type="submit"
                className={'w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg transition-colors shadow-lg shadow-blue-200 ' + (concepto.trim() === '' || monto === 0 ? 'opacity-50 cursor-not-allowed' : '')}
                disabled={concepto.trim() === '' || monto === 0}
            >
                Agregar Gasto
            </button>
        </form>
    )

}