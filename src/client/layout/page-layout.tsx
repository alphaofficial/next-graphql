import SeoTags, { SeoTagsProps } from "@/client/components/seo-meta";

export type PageLayoutProps = {
  children: React.ReactNode;
} & SeoTagsProps;

export default function PageLayout({ children, ...rest }: PageLayoutProps) {
  return (
    <>
      <SeoTags {...rest} />
      {children}
    </>
  );
}
