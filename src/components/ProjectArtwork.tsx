import {
  ArrowUpRight,
  Home,
  Layers,
  MapPin,
  Navigation,
  Sparkles,
} from "lucide-react";
import odysseusPreview from "../assets/projects/odysseus-afk.jpg";
import recoupPreview from "../assets/projects/recoup-b2b.jpg";
import heimdallPreview from "../assets/projects/heimdall.png";
import "./ProjectArtwork.css";

type WebsitePreview = {
  name: string;
  image: string;
  domain: string;
  category: string;
  status: "LIVE PROJECT" | "IN DEVELOPMENT";
  theme: string;
};

const websitePreviews: Record<string, WebsitePreview> = {
  "odysseus-afk": {
    name: "Odysseus AFK",
    image: odysseusPreview,
    domain: "cross-vendor-afk-control-plane.vercel.app",
    category: "AI agent control plane",
    status: "LIVE PROJECT",
    theme: "odysseus",
  },
  "recoup-b2b": {
    name: "Recoup",
    image: recoupPreview,
    domain: "recoup-b2b.vercel.app",
    category: "B2B revenue recovery",
    status: "LIVE PROJECT",
    theme: "recoup",
  },
  heimdall: {
    name: "Heimdall",
    image: heimdallPreview,
    domain: "github.com/Harish-0412/Heimdall",
    category: "Full-stack preview environments",
    status: "IN DEVELOPMENT",
    theme: "heimdall",
  },
};

function WebsiteArtwork({ preview }: { preview: WebsitePreview }) {
  return (
    <div
      className={`project-artwork pa-website pa-website-${preview.theme}`}
      aria-hidden="true"
    >
      <div className="artwork-canvas">
        <div className="pa-website-heading">
          <span className="pa-website-name">{preview.name}</span>
          <span className="pa-website-status">
            <i />
            {preview.status}
          </span>
        </div>
        <div className="pa-website-window">
          <div className="pa-website-chrome">
            <span className="pa-website-window-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="pa-website-address">{preview.domain}</span>
            <ArrowUpRight />
          </div>
          <div className="pa-website-viewport">
            <img
              src={preview.image}
              alt={`${preview.name} landing page`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="pa-website-footer">
          <span>{preview.category}</span>
          <span>Product & engineering</span>
        </div>
      </div>
    </div>
  );
}

function SceneFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`pa-scene-frame ${className}`}>
      <div className="pa-scene-sun" />
      <div className="pa-scene-mountain back" />
      <div className="pa-scene-mountain front" />
      <div className="pa-scene-ground" />
    </div>
  );
}

function VideoArtwork() {
  return (
    <div className="project-artwork pa-video" aria-hidden="true">
      <div className="artwork-canvas">
        <div className="pa-concept-label">Product concept</div>
        <div className="pa-video-brand">
          VideoScene<span>RAG</span>
        </div>
        <div className="pa-video-caption">Every frame has an answer.</div>
        <div className="pa-video-editor">
          <div className="pa-video-editor-top">
            <div className="pa-window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>Scene intelligence</span>
            <Layers />
          </div>
          <div className="pa-video-workspace">
            <div className="pa-video-preview">
              <SceneFrame />
              <span className="pa-video-preview-tag">Visual context</span>
              <span className="pa-video-play">▶</span>
            </div>
            <div className="pa-video-query">
              <Sparkles />
              <strong>Ask your footage.</strong>
              <div className="pa-video-query-bubble">
                Where does
                <br />
                the scene change?
              </div>
              <span className="pa-video-match">
                <span /> Scene found
              </span>
              <div className="pa-video-answer-lines">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="pa-video-timeline">
            <div className="pa-video-track">
              <SceneFrame />
              <SceneFrame className="alternate" />
              <SceneFrame />
              <SceneFrame className="alternate" />
            </div>
            <div className="pa-video-wave">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="pa-video-playhead">
              <span />
            </div>
          </div>
        </div>
        <div className="pa-video-footer">VISION + SPEECH + CONTEXT</div>
      </div>
    </div>
  );
}

function NammawayArtwork() {
  return (
    <div className="project-artwork pa-nammaway" aria-hidden="true">
      <div className="artwork-canvas">
        <div className="pa-concept-label">Product concept</div>
        <div className="pa-nammaway-brand">
          nammaway<span>✳</span>
        </div>
        <div className="pa-nammaway-copy">
          Find your
          <br />
          <em>kind of city.</em>
        </div>
        <div className="pa-nammaway-note">
          A little local intelligence.
          <br />A world of possibility.
        </div>
        <div className="pa-nammaway-orbit" />
        <div className="pa-city-phone">
          <div className="pa-phone-speaker" />
          <div className="pa-city-phone-top">
            <span>Your new chapter.</span>
            <span className="pa-city-profile">H</span>
          </div>
          <div className="pa-city-phone-title">
            Make yourself
            <br />
            at home.
          </div>
          <div className="pa-city-map">
            <div className="pa-map-block block-a" />
            <div className="pa-map-block block-b" />
            <div className="pa-map-block block-c" />
            <div className="pa-map-block block-d" />
            <div className="pa-map-block block-e" />
            <div className="pa-map-block block-f" />
            <svg viewBox="0 0 230 210" preserveAspectRatio="none">
              <path d="M39 160V123Q39 113 49 113H142Q155 113 155 100V53Q155 40 169 40H188" />
            </svg>
            <span className="pa-map-pin pin-home">
              <Home />
            </span>
            <span className="pa-map-pin pin-place">
              <MapPin />
            </span>
            <span className="pa-map-location">
              <span />
            </span>
            <span className="pa-map-park">
              The everyday,
              <br />
              reimagined.
            </span>
          </div>
          <div className="pa-city-phone-bottom">
            <Navigation />
            <div>
              <strong>Your city. Your way.</strong>
              <span>Recommendations that fit you.</span>
            </div>
          </div>
        </div>
        <div className="pa-city-tag">
          <MapPin />
          <span>A place to belong.</span>
          <ArrowUpRight />
        </div>
      </div>
    </div>
  );
}

export default function ProjectArtwork({ slug }: { slug: string }) {
  const websitePreview = websitePreviews[slug];

  if (websitePreview) {
    return <WebsiteArtwork preview={websitePreview} />;
  }

  switch (slug) {
    case "video-scene-rag":
      return <VideoArtwork />;
    case "nammaway-ai":
      return <NammawayArtwork />;
    default:
      return <WebsiteArtwork preview={websitePreviews["odysseus-afk"]} />;
  }
}
