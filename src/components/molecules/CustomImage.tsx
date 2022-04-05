import Image from 'next/image'

const CustomImage = ({ src, alt }: { src?: string; alt?: string }) => {
  if (!src) {
    return <></>
  }
  return (
    <div className="relative pt-[56.25%] w-full h-0">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  )
}
export default CustomImage
