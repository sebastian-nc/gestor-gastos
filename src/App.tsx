import { FormularioGasto } from './components/FormularioGasto'
import { TarjetaInformacion } from './components/TarjetaInformacion';
import { TarjetaGasto } from './components/TarjetaGasto';
import { Layout } from './layout';
import { toast } from 'sonner';
import { useLocalStorage } from './hooks/useLocalStorage';


interface Gasto {
  id: string;
  concepto: string;
  monto: number;
  fecha: number;
}

function App() {
  const [gastos, setGastos] = useLocalStorage<Gasto[]>('wallet-guard', []);

  function guardarGasto(concepto: string, monto: number) {
    setGastos([...gastos, { id: crypto.randomUUID(), concepto, monto, fecha: Date.now() }])
    toast.success('Gasto agregado correctamente', {
      duration: 2000
    })
  }


  const totalGastado = gastos.reduce((acum, gasto) => acum + gasto.monto, 0);


  return (
    <Layout>
      <h1 className='text-4xl text-center'>Wallet Guard</h1>


      <section className='my-5'>
        <h2 className='text-xl font-bold mb-2'>Estadistica</h2>
        <div className='md:flex md:items-center md:gap-2'>
          <TarjetaInformacion titulo='Total gastado' texto={'$' + totalGastado.toString()}>
            {
              totalGastado > 500 && (
                <p className='text-xs text-red-500'>
                  ⚠️ Cuidado, estás gastando mucho
                </p>
              )
            }
          </TarjetaInformacion>

        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-5'>
        {
          gastos.map((gasto) => {
            return (
              <TarjetaGasto
                key={gasto.id}
                concepto={gasto.concepto}
                monto={gasto.monto}
                fecha={gasto.fecha}
              />

            )
          })
        }

      </section>
      <section>
        <h3 className='text-xl font-bold mb-2 text-center'>Ingreso de gasto</h3>
        <FormularioGasto onAgregar={guardarGasto} />

      </section>
    </Layout>
  )
}

export default App
