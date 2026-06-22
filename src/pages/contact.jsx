// import React, { useState, useEffect } from 'react'
// import emailjs from '@emailjs/browser'

// export default function Contact() {
//   // ✅ Initialize EmailJS with your .env key
//   // Add useEffect import

//   // ✅ SAFE EmailJS initialization
//   useEffect(() => {
//     const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//     if (publicKey) {
//       emailjs.init(publicKey)
//     }
//   }, [])

//   // ✅ SAFE form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setSubmitStatus('')

//     const serviceId = process.env.REACT_APP_SERVICE_ID
//     const templateId = process.env.REACT_APP_TEMPLATE_ID

//     if (!serviceId || !templateId) {
//       setSubmitStatus('error')
//       setIsSubmitting(false)
//       return
//     }

//     try {
//       await emailjs.send(serviceId, templateId, {
//         from_name: formData.name,
//         from_email: formData.email,
//         message: formData.message
//       })

//       setSubmitStatus('success')
//       setFormData({ name: '', email: '', message: '' })
//     } catch (error) {
//       console.error('EmailJS error:', error)
//       setSubmitStatus('error')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }


//   // Your JSX stays exactly the same...
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 pt-20 lg:pt-24 pb-16 px-4">
//       {/* Hero Section */}
//       <section className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-gray-900 to-teal-700 bg-clip-text text-transparent mb-6 leading-tight">
//           Get In Touch
//         </h1>
//         <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full mb-8" />
//         <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
//           Got a project? Need a developer? Let's talk about profitable opportunities.
//         </p>
//       </section>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 px-6">

//         {/* Left - Contact Info */}
//         <div className="space-y-12 lg:sticky lg:top-24">
//           <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100/50">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-slate-900 to-teal-600 bg-clip-text text-transparent">
//               Reach Me
//             </h2>

//             {/* Email */}
//             <div className="mb-8 p-6 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 rounded-2xl border-2 border-teal-100/50 hover:border-teal-200/80 hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center gap-4 mb-2">
//                 <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-110">
//                   <span className="text-xl">✉️</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900">Email</h3>
//               </div>
//               <a
//                 href="https://mail.google.com/mail/?view=cm&to=piyukene.dev@gmail.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-lg font-semibold text-teal-700 hover:text-teal-800 transition-colors block"
//               >
//                 piyukene.dev@gmail.com
//               </a>
//             </div>


//             {/* Phone */}
//             <div className="group mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl border-2 border-purple-100/50 hover:border-purple-200/80 hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center gap-4 mb-2">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
//                   <span className="text-xl">📱</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900">Phone</h3>
//               </div>
//               <a
//                 href="tel:+919876543210"
//                 className="text-lg font-semibold text-purple-700 hover:text-purple-800 transition-colors block"
//               >
//                 +91 9325148937
//               </a>
//             </div>

//             {/* Social Links */}
//             <div className="pt-6 border-t border-slate-200/50">
//               <h4 className="text-lg font-semibold text-slate-900 mb-6">Or find me here:</h4>
//               <div className="grid grid-cols-2 gap-4">
//                 <a href="https://github.com/Piyush-Kene" className="group flex items-center gap-3 p-4 bg-slate-50/50 rounded-xl hover:bg-teal-500/10 hover:shadow-md transition-all">
//                   <img src="/git.png" alt="GitHub" className="w-8 h-8 filter grayscale group-hover:filter-none" />
//                   <span className="font-medium text-slate-700 group-hover:text-teal-600">GitHub</span>
//                 </a>
//                 <a href="https://linkedin.com/in/piyush-kene-6a3916328" className="group flex items-center gap-3 p-4 bg-slate-50/50 rounded-xl hover:bg-blue-500/10 hover:shadow-md transition-all">
//                   <img src="/linkedIn.png" alt="LinkedIn" className="w-8 h-8 filter grayscale group-hover:filter-none" />
//                   <span className="font-medium text-slate-700 group-hover:text-blue-600">LinkedIn</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right - Contact Form */}
//         <div>
//           <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100/50">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-slate-900 to-teal-600 bg-clip-text text-transparent">
//               Send Message
//             </h2>
//             <p className="text-slate-600 mb-12 text-lg">Fill out the form and I'll get back within 24 hours.</p>

//             {submitStatus === 'success' && (
//               <div className="mb-8 p-6 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-800 text-center font-semibold">
//                 🎉 Thanks! Your message has been sent. I'll reply soon!
//               </div>
//             )}
//             {submitStatus === 'error' && (
//               <div className="mb-8 p-6 bg-rose-100 border border-rose-300 rounded-2xl text-rose-800 text-center font-semibold">
//                 ❌ Something went wrong. Please try again!
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-2xl focus:border-teal-400 focus:ring-4 focus:ring-teal-100 focus:outline-none transition-all duration-300 text-lg placeholder-slate-500"
//                   placeholder="Your name"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-2xl focus:border-teal-400 focus:ring-4 focus:ring-teal-100 focus:outline-none transition-all duration-300 text-lg placeholder-slate-500"
//                   placeholder="your@email.com"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
//                 <textarea
//                   name="message"
//                   rows="6"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-2xl focus:border-teal-400 focus:ring-4 focus:ring-teal-100 focus:outline-none transition-all duration-300 text-lg resize-vertical placeholder-slate-500"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-300 text-lg flex items-center justify-center gap-2"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   'Send Message'
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
      console.log('✅ EmailJS initialized with:', publicKey.substring(0, 10) + '...')
    } else {
      console.error('❌ VITE_EMAILJS_PUBLIC_KEY missing in .env')
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    
    console.log('Service ID:', serviceId ? '✅ OK' : '❌ Missing')
    console.log('Template ID:', templateId ? '✅ OK' : '❌ Missing')

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      })
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 pt-20 lg:pt-24 pb-16 px-4">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-gray-900 to-teal-700 bg-clip-text text-transparent mb-6 leading-tight">
          Get In Touch
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full mb-8" />
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Got a project? Need a developer? Let's talk about profitable opportunities.
        </p>
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 px-6">
        {/* Left - Contact Info */}
        <div className="space-y-12 lg:sticky lg:top-24">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100/50">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-slate-900 to-teal-600 bg-clip-text text-transparent">
              Reach Me
            </h2>

            {/* ✅ FIXED Email */}
            <div className="mb-8 p-6 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 rounded-2xl border-2 border-teal-100/50 hover:border-teal-200/80 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="text-xl">✉️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Email</h3>
              </div>
              <a
                href="mailto:piyushkene.dev@gmail.com"
                className="text-lg font-semibold text-teal-700 hover:text-teal-800 transition-colors block"
              >
                piyushkene.dev@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl border-2 border-purple-100/50 hover:border-purple-200/80 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Phone</h3>
              </div>
              <a
                href="tel:+919325148937"
                className="text-lg font-semibold text-purple-700 hover:text-purple-800 transition-colors block"
              >
                +91 93251 48937
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-200/50">
              <h4 className="text-lg font-semibold text-slate-900 mb-6">Or find me here:</h4>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/Piyush-Kene" className="group flex items-center gap-3 p-4 bg-slate-50/50 rounded-xl hover:bg-teal-500/10 hover:shadow-md transition-all">
                  <img src="/git.png" alt="GitHub" className="w-8 h-8 filter grayscale group-hover:filter-none" />
                  <span className="font-medium text-slate-700 group-hover:text-teal-600">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/piyush-kene-6a3916328" className="group flex items-center gap-3 p-4 bg-slate-50/50 rounded-xl hover:bg-blue-500/10 hover:shadow-md transition-all">
                  <img src="/linkedIn.png" alt="LinkedIn" className="w-8 h-8 filter grayscale group-hover:filter-none" />
                  <span className="font-medium text-slate-700 group-hover:text-blue-600">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100/50">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-slate-900 to-teal-600 bg-clip-text text-transparent ">
              Send Message
            </h2>
            <p className="text-slate-600 mb-12 text-lg">Fill out the form and I'll get back within 24 hours.</p>

            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-800 text-center font-semibold">
                🎉 Thanks! Your message has been sent. I'll reply soon!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-rose-100 border border-rose-300 rounded-2xl text-rose-800 text-center font-semibold">
                ❌ Something went wrong. Please try again!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-2xl focus:border-teal-400 focus:ring-4 focus:ring-teal-100 focus:outline-none transition-all duration-300 text-lg placeholder-slate-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-2xl focus:border-teal-400 focus:ring-4 focus:ring-teal-100 focus:outline-none transition-all duration-300 text-lg placeholder-slate-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 text-slate-700 border-slate-200 rounded-2xl focus:border-teal-400 focus:ring-4 focus:ring-teal-100 focus:outline-none transition-all duration-300 text-lg resize-vertical placeholder-slate-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-300 text-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
