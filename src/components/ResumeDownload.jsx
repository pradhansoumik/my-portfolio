import { siteConfig } from "../data/site.config";

export default function ResumeDownload({ className, children, onClick }) {
  return (
    <a
      href={siteConfig.resumeUrl}
      download={siteConfig.resumeDownloadName}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
