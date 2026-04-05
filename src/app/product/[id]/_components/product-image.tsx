import Image from "next/image";

export default function ProductImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Image
      width={640 / 2}
      height={873 / 2}
      src={src}
      className="sm:rounded-4xl border shadow-lg h-fit lg:sticky lg:top-24 w-full lg:w-fit"
      alt={alt}
    />
  );
}
