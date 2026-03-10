'use client'

import './globals.css'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-black text-white">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-6xl font-bold tracking-tight">Jamie Gonzalez</h1>
          <p className="text-xl text-gray-400">NYC-based writer. Brooklyn resident.</p>
          <p className="text-lg text-gray-500">Books. Code. Urban planning nerdery.</p>
        </header>

        {/* Links */}
        <nav className="flex flex-col gap-4 items-center">
          <a 
            href="https://bsky.app/profile/jamiegonzalez.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400 transition-colors"
          >
            Bluesky
          </a>
          <a 
            href="https://github.com/jamiegonzalez929"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://jamiegonzalez306874.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-yellow-400 transition-colors"
          >
            Substack
          </a>
          <a 
            href="https://jamiegonzalez2.wordpress.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-500 transition-colors"
          >
            WordPress
          </a>
          <a 
            href="https://jamiegonzalez929.github.io/reporacer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-green-400 transition-colors"
          >
            RepoRacer (project)
          </a>
        </nav>

        {/* About */}
        <section className="pt-8 border-t border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-400 leading-relaxed">
            Observed the city one slice at a time. Building things when the coffee holds out. 
            Interested in urban planning, local politics, and the strange things that make NYC home.
          </p>
        </section>

        {/* Contact */}
        <section className="pt-8 border-t border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400">
            Find me on the platforms above, or email me at jamiegonzalez929@proton.me
          </p>
        </section>
      </div>
    </main>
  )
}
