import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PaperClipIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlass, Pencil, ShoppingCart, Trash } from '@phosphor-icons/react'
import { ItensList } from './components/ItensList'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="">

        <header className="bg-zinc-400">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  Product
                  <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Features
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Marketplace
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Company
              </a>
            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                            Product
                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products, ...callsToAction].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>


        {/* <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header> */}
        <main className=''>
          <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-4 gap-4">
              <div className='menu-esquerdo col-span-2 flex flex-col'>
                <div className='flex items-center justify-between'>
                  <div>
                    {/* <p className='font-semibold text-zinc-600 text-sm md:text-base'>Venda não iniciada</p> */}
                    <button className='bg-red-600 p-2  text-white font-semibold text-xs md:text-base hover:bg-red-900 transition-all'>Cancelar venda</button>
                  </div>

                  <div>
                    {/* <p className='font-semibold text-zinc-600 text-sm md:text-base'>Frente Caixa</p> */}
                    <button className='bg-blue-800 p-2  text-white font-semibold text-xs md:text-base hover:bg-blue-900 transition-all'>Lista de operações</button>
                  </div>

                </div>

                <div className='mt-4 flex flex-col md:flex-row gap-4'>

                  <div className=' w-full md:w-24  flex items-center justify-center gap-1 border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className="w-full outline-none placeholder:text-gray-400 focus:placeholder:text-blue-300"
                      placeholder="Qtd"
                    />
                  </div>

                  <div className='w-full  flex items-center justify-center gap-1 border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                    <MagnifyingGlass className='text-gray-400' size={24} weight="bold" />
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className="w-full outline-none placeholder:text-gray-400 focus:placeholder:text-blue-300"
                      placeholder="Digite o nome do produto ou leia Código de barras"
                    />
                  </div>


                </div>

                <div className="overflow-auto p-3 mt-2  flex flex-col   rounded-xl ring-1 ring-gray-200 ">
                  {/* <div className='flex flex-col items-center justify-center h-96'>
                <ShoppingCart className='text-8xl md:text-9xl text-zinc-300'  weight="bold" />
                <p className='text-zinc-300 font-semibold'>Selecione os produtos</p> 
                </div> */}

                  <div className=''>
                    <header class="flex gap-2">
                      <div className='w-20'>#</div>
                      <div className='w-full' >Item</div>
                      <div className='w-32'>Qtd</div>
                      <div className='w-32'>Vl Unit</div>
                      <div className='w-32'>Vl Total</div>
                      <div className='w-32 text-center'>Edit</div>
                    </header>

                    <ItensList />
                    <ItensList />
                    <ItensList />
                 
               

                  </div>



                </div >


                <div className='flex flex-col md:flex-row w-full gap-3 mt-2' >

                  <div className='bg-zinc-500 flex items-center justify-between p-2 w-full'>
                    <p className='text-5xl font-bold text-zinc-300'>#</p>
                    <div className='flex flex-col items-end gap-1'>
                      <p className='text-2xl font-bold text-zinc-300'>0</p>
                      <p className='text-2xl font-bold text-zinc-300'>itens</p>
                    </div>
                  </div>
                  <div className='bg-zinc-500 flex items-center justify-between p-2 w-full'>
                    <p className='text-5xl font-bold text-zinc-300'>$</p>
                    <div className='flex flex-col items-end gap-1'>
                      <p className='text-2xl font-bold text-zinc-300'>0,00</p>
                      <p className='text-2xl font-bold text-zinc-300'>Subtotal</p>
                    </div>
                  </div>
                  <div className='bg-zinc-500 flex items-center justify-between p-2 w-full'>
                    <p className='text-5xl font-bold text-zinc-300'>$</p>
                    <div className='flex flex-col items-end gap-1'>
                      <p className='text-2xl font-bold text-zinc-300'>0,00</p>
                      <p className='text-2xl font-bold text-zinc-300'>Desconto</p>
                    </div>
                  </div>
                  <div className='bg-zinc-500 flex items-center justify-between p-2 w-full'>
                    <p className='text-5xl font-bold text-zinc-300'>$</p>
                    <div className='flex flex-col items-end gap-1'>
                      <p className='text-2xl font-bold text-zinc-300'>0,00</p>
                      <p className='text-2xl font-bold text-zinc-300'>Total</p>
                    </div>
                  </div>

                </div>
 
              </div>

              <div className="flex flex-col mx-auto  max-w-2xl rounded-xl ring-1 ring-gray-200  lg:mx-0 lg:flex lg:max-w-none">
                <div className='bg-zinc-300 w-full'>

                </div>
              </div>


            </div>
          </div>
        </main>

        <footer
  className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
  <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
    <a
      className="text-neutral-800 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >Tailwind Elements</a
    >
  </div>
</footer>
      </div>
    </>
  )
}
