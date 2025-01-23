import Link from "next/link"
import { Facebook, Twitter, Instagram, PinIcon as Pinterest } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full border-t py-12 px-4">
  
     

      <div className="container mx-auto">
        <div className="flex justify-around  mb-8">
          {/* Shop Section */}
          <div>
            <h3 className="font-semibold mb-2">SHOP</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/men" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">Men&apos;s collection</Link></li>
              <li><Link href="/women" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">Women&apos;s collection</Link></li>
              <li><Link href="/category/manshoes" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">Men&apos;s Shoes</Link></li>
              <li><Link href="/category/manleatheraccessories" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">Men&apos;s Accessories</Link></li>
            </ul>
          </div>

          {/* Bespoke Section */}
          <div>
            <h3 className="font-semibold mb-2">BESPOKE</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/customize/custom jackets" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">Custom Jackets</Link></li>
              <li><Link href="/customize/custom shoes" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">Custom Shoes</Link></li>
              <li><Link href="/customize/custom bags" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">Custom Bags</Link></li>
              <li><Link href="/customize/custom jerseys" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">Custom jerseys</Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-semibold mb-2">HELP</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/trackOrder" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">My Order</Link></li>
              <li><Link href="/sizeGuaide" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">Size Guide</Link></li>
       
              <li><Link href="/policies" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">Our policies</Link></li>
              <li><Link href="/contactUs" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-1">Contact Us</Link></li>
            </ul>
          </div>
            {/* Newsletter and Social Media Section */}
        <div className="flex flex-col gap-y-4 ">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://facebook.com" className="text-muted-foreground border rounded-full p-1 hover:border-black hover:text-foreground">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground border rounded-full p-1 hover:border-black">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground border rounded-full p-1 hover:border-black">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://pinterest.com" className="text-muted-foreground hover:text-foreground border rounded-full p-1 hover:border-black">
              <Pinterest className="h-6 w-6" />
              <span className="sr-only">Pinterest</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-8">
            <input 
              type="email" 
              placeholder="Subscribe to our newsletter" 
              className="w-full md:w-64 focus:outline-none "
            />
            <div className="flex gap-2">
              <Button className="rounded-none text-[12px]" >MEN</Button>
              <Button className=" rounded-none text-[12px]">WOMEN</Button>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground">Free Shipping in USA, UK, Australia, Canada & World Wide.</p>
        </div>
        </div>

      

        {/* Copyright Section */}
        <div className="mt-8 pt-8  text-center text-xs text-muted-foreground">
      
          <p className="mt-4">
            TJM © COPYRIGHT {new Date().getFullYear()} | This site is protected by reCAPTCHA and the Google{" "}
            <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link> and{" "}
            <Link href="/terms" className="underline hover:text-foreground">Terms of Service</Link> apply.
          </p>
        </div>
      </div>
    </footer>
  )
}

