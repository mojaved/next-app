import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <><main><h1>Hello World</h1></main><Link href={"/users"}>Users</Link></>
  )
}
