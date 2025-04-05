"use client"

import Link from "next/link"
import {
  BarChart3,
  Box,
  Clock,
  FileText,
  Globe,
  MapPin,
  MessageSquare,
  Package,
  Search,
  Truck,
  Eye,
  FileBarChart,
  ChevronDown,
  Menu,
  User,
} from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function LandingPage() {
  const howItWorksRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top black bar */}
      <div className="bg-black text-white py-2 px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="text-center sm:text-left mb-2 sm:mb-0">
          <span className="text-xs sm:text-sm">
            Suscríbete a nuestro boletín mensual Morvan, donde encontrarás información clave sobre comercio global,
            aduanas y transporte de mercancías.
          </span>
        </div>
        <div>
          <Button
            variant="link"
            className="text-white p-0 h-auto text-xs sm:text-sm transition-colors duration-200 hover:text-orange-400"
          >
            <span className="flex items-center">
              <span className="mr-1 text-orange-500">&#9679;</span>Seguimiento PAPS/PARS
            </span>
          </Button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="#" className="mr-4 md:mr-8 transition-opacity duration-200 hover:opacity-80">
              <img src="/images/newlogo.png" alt="FreightFlow Logo" className="h-8 md:h-10 w-auto" />
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center">
                {/* Software y servicios */}
                <div className="relative group">
                  <button className="flex items-center text-gray-700 font-medium px-4 py-2 transition-colors duration-200 hover:text-blue-600">
                    Software y servicios
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transform origin-top transition duration-150 ease-out">
                    <div className="py-1">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                      >
                        Opción 1
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                      >
                        Opción 2
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                      >
                        Opción 3
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Separador vertical */}
                <div className="h-5 border-l border-gray-300 mx-1"></div>

                {/* Soluciones */}
                <div className="relative group">
                  <button className="flex items-center text-gray-700 font-medium px-4 py-2 transition-colors duration-200 hover:text-blue-600">
                    Soluciones
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transform origin-top transition duration-150 ease-out">
                    <div className="py-1">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                      >
                        Opción 1
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                      >
                        Opción 2
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Separador vertical */}
                <div className="h-5 border-l border-gray-300 mx-1"></div>

                {/* Recursos */}
                <div className="relative group">
                  <button className="flex items-center text-gray-700 font-medium px-4 py-2 transition-colors duration-200 hover:text-blue-600">
                    Recursos
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transform origin-top transition duration-150 ease-out">
                    <div className="py-1">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                      >
                        Opción 1
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                      >
                        Opción 2
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Separador vertical */}
                <div className="h-5 border-l border-gray-300 mx-1"></div>

                {/* Compañía */}
                <div className="relative group">
                  <button className="flex items-center text-gray-700 font-medium px-4 py-2 transition-colors duration-200 hover:text-blue-600">
                    Compañía
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transform origin-top transition duration-150 ease-out">
                    <div className="py-1">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                      >
                        Opción 1
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                      >
                        Opción 2
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-1 md:p-2 hover:text-blue-600 transition-colors duration-200">
              <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-600 hover:text-blue-600" />
            </button>

            {/* Separador vertical (solo visible en desktop) */}
            <div className="h-5 border-l border-gray-300 mx-1 hidden md:block"></div>

            {/* Desktop login dropdown */}
            <div className="hidden md:block relative group">
              <button className="flex items-center text-gray-700 font-medium px-4 py-2 transition-colors duration-200 hover:text-blue-600">
                Inicio de sesión del cliente
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 mt-1 w-56 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transform origin-top transition duration-150 ease-out">
                <div className="py-1">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                  >
                    Iniciar sesión
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                  >
                    Registrarse
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile login button */}
            <button className="md:hidden p-1 hover:text-blue-600 transition-colors duration-200">
              <User className="h-4 w-4 text-gray-600 hover:text-blue-600" />
            </button>

            {/* Separador vertical (solo visible en desktop) */}
            <div className="h-5 border-l border-gray-300 mx-1 hidden md:block"></div>

            <Button className="hidden sm:inline-flex bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 h-auto transition-all duration-200 hover:shadow-md">
              Reservar una demostración
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} border-t border-gray-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="block px-3 py-2 text-base font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
              Software y servicios
            </div>
            <div className="block px-3 py-2 text-base font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
              Soluciones
            </div>
            <div className="block px-3 py-2 text-base font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
              Recursos
            </div>
            <div className="block px-3 py-2 text-base font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
              Compañía
            </div>
            <div className="block px-3 py-2 text-base font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
              Inicio de sesión del cliente
            </div>
            <div className="mt-4 px-3">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all duration-200 hover:shadow-md">
                Reservar una demostración
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 px-4 py-2">
        <div className="flex items-center text-xs sm:text-sm">
          <Link href="#" className="text-orange-500 hover:underline">
            Inicio
          </Link>
          <span className="mx-2 text-gray-500">{">"}</span>
          <span className="text-gray-700">Agente de carga</span>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section with animation */}
        <motion.section
          className="relative bg-blue-900 text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img src="/images/img02.png" alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-900/70"></div>
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 sm:gap-8 px-4 py-10 sm:py-16 md:grid-cols-2 md:py-24">
            <motion.div
              className="space-y-4 sm:space-y-6 text-center md:text-left"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-orange-400 font-bold text-sm sm:text-base mb-1 sm:mb-2">Transportistas</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Orientado a empresas logisticas (Freight Brokerage, 3PL, Trucking companies)

              </h1>
              <p className="text-base sm:text-lg text-blue-100">
                Optimiza tus operaciones logísticas con nuestra plataforma digital integral.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                <Button className="bg-orange-500 text-white text-sm sm:text-base transition-all duration-300 hover:bg-orange-600 hover:shadow-lg px-3 sm:px-4 py-1 sm:py-2 h-auto">
                  Solicitar Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white text-sm sm:text-base transition-all duration-300 hover:bg-blue-800 hover:shadow-lg px-3 sm:px-4 py-1 sm:py-2 h-auto"
                >
                  Más Información
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="hidden md:block"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="/images/img01.png"
                alt="Freight Transport Platform"
                className="rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-white" ref={howItWorksRef}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900">How It Works</h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-2">
                FreightFlow simplifica el proceso de transporte de mercancías mediante:
              </p>
            </div>

            <div className="relative mt-20">
              {/* Timeline connector */}
              <div className="absolute left-0 right-0 top-24 h-1 bg-orange-500 hidden md:block"></div>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Step 1 */}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white z-10 mb-6 transition-transform duration-300 hover:scale-110">
                    1
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg text-center h-full">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-800">
                      <FileText className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">Automatización del manejo de documentos</h3>
                    <p className="text-gray-600">
                      Convierte instantáneamente documentos en datos estructurados mediante tecnología de IA avanzada.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white z-10 mb-6 transition-transform duration-300 hover:scale-110">
                    2
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg text-center h-full">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-800">
                      <Eye className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">Mejorar la visibilidad</h3>
                    <p className="text-gray-600">
                      Proporcionar una vista de torre de control global que permite a los transportistas supervisar y
                      gestionar los envíos de manera eficaz.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white z-10 mb-6 transition-transform duration-300 hover:scale-110">
                    3
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg text-center h-full">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-800">
                      <FileBarChart className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">Personalización de informes</h3>
                    <p className="text-gray-600">
                      Ofrecemos capacidades avanzadas de informes impulsados por inteligencia artificial que pueden
                      adaptarse a las necesidades específicas de cada cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-8 sm:mb-12 max-w-[800px] text-center">
              <h2
                className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl px-2"
                style={{
                  backgroundImage: "url('/images/img03.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Powerful Features for Modern Logistics
              </h2>
              <p className="text-gray-500 text-sm sm:text-base md:text-lg px-2">
                Our platform provides everything you need to manage your freight transport operations efficiently.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Real-time Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription>
                    Monitor your shipments in real-time with precise location data and estimated arrival times.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Document Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription>
                    Easily upload, store, and manage all your shipping documentation in one secure location.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    Analytics Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription>
                    Gain valuable insights into your shipping operations with comprehensive analytics and reporting.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    Communication Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription>
                    Stay connected with carriers, customers, and partners through our integrated messaging system.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Globe className="h-5 w-5 text-blue-600" />
                    Global Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription>
                    Manage shipments across the globe with support for international shipping regulations and
                    documentation.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Delivery Estimates
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription>
                    Get accurate delivery time estimates based on real-time data and historical performance.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="bg-blue-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Intuitive Dashboard Experience
              </h2>
              <p className="text-gray-500 md:text-lg">
                Our user-friendly dashboard gives you complete visibility and control over your shipments.
              </p>
            </div>
            <div className="mx-auto max-w-[1200px] overflow-hidden rounded-xl bg-white p-4 shadow-xl md:p-6">
              <div className="grid gap-6 md:grid-cols-12">
                {/* Sidebar Preview */}
                <div className="hidden border-r md:col-span-3 md:block">
                  <div className="space-y-6 pr-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-500">MAIN MENU</h3>
                      <div className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-blue-600">
                        <Box className="h-5 w-5" />
                        <span className="font-medium">Dashboard</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
                        <Truck className="h-5 w-5" />
                        <span>Shipments</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
                        <FileText className="h-5 w-5" />
                        <span>Documents</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
                        <BarChart3 className="h-5 w-5" />
                        <span>Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Main Content Preview */}
                <div className="md:col-span-9">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Active Shipments</h3>
                      <Input className="max-w-[300px]" placeholder="Search shipments..." type="search" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">SHP-2023-8742</CardTitle>
                            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
                              In Transit
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Shanghai, CN</span>
                              <span className="text-gray-500">Los Angeles, US</span>
                            </div>
                            <Progress value={65} className="h-2" />
                            <div className="flex items-center justify-between text-xs">
                              <span>Departed: Apr 1</span>
                              <span>ETA: Apr 15</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Package className="h-4 w-4" />
                              <span>Electronics • 2 containers</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">SHP-2023-9103</CardTitle>
                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                              Customs Cleared
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Rotterdam, NL</span>
                              <span className="text-gray-500">New York, US</span>
                            </div>
                            <Progress value={85} className="h-2" />
                            <div className="flex items-center justify-between text-xs">
                              <span>Departed: Mar 25</span>
                              <span>ETA: Apr 8</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Package className="h-4 w-4" />
                              <span>Automotive • 1 container</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">SHP-2023-8956</CardTitle>
                            <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-600">
                              Documentation
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Hamburg, DE</span>
                              <span className="text-gray-500">Miami, US</span>
                            </div>
                            <Progress value={30} className="h-2" />
                            <div className="flex items-center justify-between text-xs">
                              <span>Departed: Apr 3</span>
                              <span>ETA: Apr 20</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Package className="h-4 w-4" />
                              <span>Textiles • 3 containers</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-[800px] rounded-2xl bg-blue-600 p-8 text-center text-white shadow-xl md:p-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Transform Your Logistics?</h2>
              <p className="mb-8 text-blue-100 md:text-lg">
                Join thousands of companies that trust our platform to manage their global freight operations.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">Get Started Now</Button>
                <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <img src="/images/newlogo.png" alt="FreightFlow Logo" className="h-8 w-auto" />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Simplifying global freight transport with innovative digital solutions.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Ocean Freight
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Air Freight
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Road Transport
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Customs Clearance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">Company</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            <p>© 2025 Morvan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

