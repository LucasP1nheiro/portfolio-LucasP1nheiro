'use client'

import { CheckIcon, Copy, Send } from 'lucide-react'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from './ui/use-toast'

const Contact = () => {
  const sendToast = () => {
    toast({
      action: (
        <div className="flex w-full items-center text-secondary">
          <CheckIcon className="mr-2 text-primary" />
          <span className="first-letter:capitalize">Copied to clipboard!</span>
        </div>
      ),
    })
  }

  return (
    <section className="mx-auto flex w-full flex-col items-center justify-center gap-8 text-center ">
      <h1 className="bg-gradient-to-r from-[#FFF883] to-[#FFAAAB] bg-clip-text text-3xl font-bold text-transparent">
        Interested in Working Together?
      </h1>
      <h3 className="text-lg text-secondary">
        Send me an e-mail and let&apos;s discuss your ideas.
      </h3>

      <div className="flex items-center gap-4 rounded-md border p-2 text-primary">
        <p className="text-md">lps1704@gmail.com</p>
        <button>
          <CopyToClipboard text="lps1704@gmail.com" onCopy={() => sendToast()}>
            <Copy size={18} className="hover:cursor-pointer" />
          </CopyToClipboard>
        </button>
        <a href="mailto:lps1704@gmail.com">
          <Send size={18} />
        </a>
      </div>
    </section>
  )
}

export default Contact
