import Image from 'next/image'
import LogoOutgoing from '@/images/logos/outgoing.svg'

export function Logo(props) {
  return (
    <Image
    src={LogoOutgoing}
    alt="Logo"
    width={200}  // Adjust width for larger logo
    height={200} // Adjust height for larger logo
    className="max-w-full h-auto"  // Makes the logo responsive within its container
    />
  )
}