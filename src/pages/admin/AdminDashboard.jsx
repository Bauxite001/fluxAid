// pages/admin/AdminDashboard.jsx
import { supabase } from "../../lib/supabase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ── PUBLISHED MANAGER ─────────────────────────────────────────────────
// Fetches LIVE data from Supabase so admin can delete anything,
// even items published from a previous session

const TABLE_CONFIG = [
  {
    id: "daily_posts",
    label: "Daily Posts",
    icon: "📍",
    titleField: "title",
    dateField: "created_at",
  },
  {
    id: "blog_posts",
    label: "Blog Posts",
    icon: "📝",
    titleField: "title",
    dateField: "created_at",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "📋",
    titleField: "title",
    dateField: "created_at",
  },
  {
    id: "programs",
    label: "Programs",
    icon: "🤝",
    titleField: "title",
    dateField: "created_at",
  },
  {
    id: "gallery_items",
    label: "Gallery",
    icon: "🖼️",
    titleField: "alt",
    dateField: "created_at",
  },
];

const PublishedManager = () => {
  const [activeTable, setActiveTable] = useState("daily_posts");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(null);

  const config = TABLE_CONFIG.find((t) => t.id === activeTable);

  // Fetch whenever table changes
  useEffect(() => {
    fetchItems();
  }, [activeTable]);

  const fetchItems = async () => {
    setLoading(true);
    setItems([]);

    const { data, error } = await supabase
      .from(activeTable)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Error fetching items: " + error.message);
    } else {
      setItems(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (item) => {
    const title = item[config.titleField] || "(No title)";
    if (
      !window.confirm(
        `Delete "${title}"?\n\nThis removes it from the live website immediately.`,
      )
    )
      return;

    setDeleting(item.id);

    try {
      // 1. If it has a media URL, delete the file from storage too
      const mediaUrl = item.media_url || item.cover_url;
      if (mediaUrl && mediaUrl.includes("supabase")) {
        // Extract the file path from the URL
        const urlParts = mediaUrl.split("/media/");
        if (urlParts.length > 1) {
          await supabase.storage.from("media").remove([urlParts[1]]);
        }
      }

      // 2. Delete the database record
      const { error } = await supabase
        .from(activeTable)
        .delete()
        .eq("id", item.id);

      if (error) {
        alert("Error deleting: " + error.message);
        setDeleting(null);
        return;
      }

      // 3. Remove from local state
      setItems((prev) => prev.filter((i) => i.id !== item.id));
      alert(`✅ "${title}" deleted from the live site.`);
    } catch (err) {
      alert("Something went wrong: " + err.message);
    }

    setDeleting(null);
  };

  const handleTogglePublished = async (item) => {
    const newVal = !item.published;

    const { error } = await supabase
      .from(activeTable)
      .update({ published: newVal })
      .eq("id", item.id);

    if (error) {
      alert("Error updating: " + error.message);
      return;
    }

    setItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, published: newVal } : i)),
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Header */}
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "16px",
          padding: "24px 28px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #2F8AC9, #6C609E)",
            borderRadius: "16px 16px 0 0",
          }}
        />
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "24px",
            fontWeight: 700,
            color: "#0D1117",
            marginBottom: "4px",
          }}
        >
          Published Content
        </h2>
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            color: "#9CA3AF",
            margin: "0 0 20px",
          }}
        >
          Everything currently live on your website. Delete or unpublish
          anything here.
        </p>

        {/* Table picker */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {TABLE_CONFIG.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTable(t.id)}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "8px 16px",
                borderRadius: "20px",
                border: "1.5px solid",
                borderColor: activeTable === t.id ? "#2F8AC9" : "#E5E7EB",
                background: activeTable === t.id ? "#2F8AC9" : "#FFFFFF",
                color: activeTable === t.id ? "#FFFFFF" : "#6B7280",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Items list */}
      {loading ? (
        <div style={{ textAlign: "center", padding: "48px" }}>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "14px",
              color: "#9CA3AF",
            }}
          >
            Loading {config.label.toLowerCase()}...
          </p>
        </div>
      ) : items.length === 0 ? (
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            padding: "60px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "40px",
              opacity: 0.2,
              display: "block",
              marginBottom: "14px",
            }}
          >
            📭
          </span>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              color: "#9CA3AF",
            }}
          >
            No {config.label.toLowerCase()} published yet.
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Count */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "4px",
            }}
          >
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#9CA3AF",
              }}
            >
              {items.length} item{items.length !== 1 ? "s" : ""} ·{" "}
              {items.filter((i) => i.published).length} published
            </span>
            <button
              onClick={fetchItems}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#2F8AC9",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              ↻ Refresh
            </button>
          </div>

          {items.map((item) => {
            const title = item[config.titleField] || "(No title)";
            const mediaUrl = item.media_url || item.cover_url;
            const date = new Date(item.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });
            const isDeleting = deleting === item.id;

            return (
              <div
                key={item.id}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  opacity: isDeleting ? 0.5 : 1,
                  transition: "all 0.2s",
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "8px",
                    background: "#0F1E35",
                    overflow: "hidden",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {mediaUrl ? (
                    mediaUrl.includes(".mp4") || mediaUrl.includes(".mov") ? (
                      <video
                        src={mediaUrl}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        muted
                      />
                    ) : (
                      <img
                        src={mediaUrl}
                        alt={title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )
                  ) : (
                    <span style={{ fontSize: "22px", opacity: 0.4 }}>
                      {config.icon}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#0D1117",
                      margin: "0 0 3px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {title}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "11px",
                        fontWeight: 300,
                        color: "#9CA3AF",
                      }}
                    >
                      {date}
                    </span>
                    {item.category && (
                      <>
                        <span
                          style={{
                            width: "3px",
                            height: "3px",
                            borderRadius: "50%",
                            background: "#D1D5DB",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            color: "#9CA3AF",
                          }}
                        >
                          {item.category || item.tag}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Published toggle */}
                <button
                  onClick={() => handleTogglePublished(item)}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    border: "1.5px solid",
                    borderColor: item.published
                      ? "rgba(39,174,96,0.4)"
                      : "#E5E7EB",
                    background: item.published
                      ? "rgba(39,174,96,0.1)"
                      : "#F8F9FB",
                    color: item.published ? "#16a34a" : "#9CA3AF",
                    cursor: "pointer",
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  {item.published ? "✓ Live" : "Hidden"}
                </button>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(item)}
                  disabled={isDeleting}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    border: "1.5px solid rgba(220,38,38,0.2)",
                    background: "rgba(220,38,38,0.05)",
                    color: "#DC2626",
                    cursor: isDeleting ? "not-allowed" : "pointer",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isDeleting) {
                      e.currentTarget.style.background = "rgba(220,38,38,0.12)";
                      e.currentTarget.style.borderColor = "rgba(220,38,38,0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(220,38,38,0.05)";
                    e.currentTarget.style.borderColor = "rgba(220,38,38,0.2)";
                  }}
                  title="Delete from live site"
                >
                  {isDeleting ? "..." : "🗑️"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ── TABS ─────────────────────────────────────────────────────────────
const TABS = [
  { id: "daily", label: "Daily Activity", icon: "📍" },
  { id: "blog", label: "Blog Posts", icon: "📝" },
  { id: "projects", label: "Projects", icon: "📋" },
  { id: "programs", label: "Programs", icon: "🤝" },
  { id: "gallery", label: "Gallery", icon: "🖼️" },
  { id: "published", label: "Published", icon: "🌐" },
];

// ── CONSTANTS ─────────────────────────────────────────────────────────
const TAGS = [
  "Health",
  "Education",
  "Advocacy",
  "Empowerment",
  "Environment",
  "Awards",
  "Community",
  "Other",
];
const EMOJIS = [
  "🌍",
  "🏥",
  "📚",
  "🤝",
  "⚖️",
  "💊",
  "💻",
  "🌱",
  "🎤",
  "📢",
  "🏆",
  "🎖️",
  "👩🏾‍💻",
  "📖",
  "🏢",
  "🙋🏾",
  "💛",
  "📄",
  "👕",
  "🎗️",
];
const CATEGORIES = ["Field Activity", "Awards", "Team", "Community", "Branded"];
const PROG_ICONS = ["⚖️", "🤝", "📢", "🏥", "💻", "📚", "🌱", "🎗️"];
const PROJ_STATUS = ["Ongoing", "Completed", "Planned"];
const PROJ_CATS = [
  "Health",
  "Education",
  "Advocacy",
  "Empowerment",
  "Environment",
  "Awards",
  "Community",
  "Tech",
];
const BLOG_CATS = [
  "About Us",
  "Awards",
  "Opinion",
  "Impact Report",
  "Field Story",
];

// ── EMPTY STATES ──────────────────────────────────────────────────────
const EMPTY_DAILY = {
  date: "",
  tag: "Health",
  tagColor: "#2F8AC9",
  title: "",
  coverEmoji: "🌍",
  coverImage: null,
  body: ["", "", ""],
  highlight: "",
  author: "Flux Aid Initiative",
  authorRole: "Field Communications Team",
  location: "Abuja, Nigeria",
  time: "",
};

const EMPTY_BLOG = {
  title: "",
  slug: "",
  category: "Field Story",
  excerpt: "",
  body: ["", "", ""],
  author: "Flux Aid Team",
  authorInitials: "FA",
  readTime: "5 min read",
  coverImage: null,
  published: false,
};

const EMPTY_PROJECT = {
  title: "",
  category: "Health",
  status: "Ongoing",
  location: "",
  year: new Date().getFullYear().toString(),
  description: "",
  outcomes: ["", "", ""],
  icon: "📋",
  coverImage: null,
  published: false,
};

const EMPTY_PROGRAM = {
  num: "01",
  icon: "⚖️",
  title: "",
  desc: "",
  stat: "",
  coverImage: null,
  published: false,
};

const EMPTY_GALLERY = {
  alt: "",
  category: "Field Activity",
  mediaFile: null,
  mediaPreview: null,
  mediaType: "image",
  published: true,
};

// ── SHARED STYLES ─────────────────────────────────────────────────────
const inp = {
  width: "100%",
  padding: "12px 14px",
  background: "#F8F9FB",
  border: "1.5px solid #E5E7EB",
  borderRadius: "8px",
  outline: "none",
  fontFamily: "'Barlow', sans-serif",
  fontSize: "14px",
  color: "#0D1117",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const lbl = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontSize: "9px",
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#9CA3AF",
  display: "block",
  marginBottom: "6px",
};

const sectionTitle = (text, sub) => (
  <div style={{ marginBottom: "24px" }}>
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "28px",
        fontWeight: 700,
        color: "#0D1117",
        marginBottom: "4px",
      }}
    >
      {text}
    </h2>
    {sub && (
      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "13px",
          fontWeight: 300,
          color: "#9CA3AF",
          margin: 0,
        }}
      >
        {sub}
      </p>
    )}
  </div>
);

// ── MEDIA UPLOAD COMPONENT ────────────────────────────────────────────
const MediaUpload = ({
  value,
  preview,
  type,
  onChange,
  label = "Cover Photo or Video",
  accept = "image/*,video/*",
}) => {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const fileType = file.type.startsWith("video") ? "video" : "image";
    onChange(file, url, fileType);
  };

  return (
    <div>
      <label style={lbl}>{label}</label>

      {/* Preview area */}
      {preview ? (
        <div
          style={{
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "10px",
            background: "#0D1117",
            maxHeight: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {type === "video" ? (
            <video
              src={preview}
              controls
              style={{
                width: "100%",
                maxHeight: "220px",
                objectFit: "contain",
              }}
            />
          ) : (
            <img
              src={preview}
              alt="Preview"
              style={{ width: "100%", maxHeight: "220px", objectFit: "cover" }}
            />
          )}
          <button
            type="button"
            onClick={() => onChange(null, null, "image")}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.6)",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>
      ) : (
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "32px",
            background: "#F8F9FB",
            border: "2px dashed #E5E7EB",
            borderRadius: "10px",
            cursor: "pointer",
            marginBottom: "10px",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#2F8AC9")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
        >
          <span style={{ fontSize: "32px", opacity: 0.4 }}>📁</span>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#2F8AC9",
                margin: "0 0 4px",
              }}
            >
              Click to upload
            </p>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "11px",
                fontWeight: 300,
                color: "#9CA3AF",
                margin: 0,
              }}
            >
              Images (JPG, PNG, WebP) or Videos (MP4, MOV) · Max 50MB
            </p>
          </div>
          <input
            type="file"
            accept={accept}
            onChange={handleFile}
            style={{ display: "none" }}
          />
        </label>
      )}

      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "11px",
          fontWeight: 300,
          color: "#9CA3AF",
          margin: 0,
        }}
      >
        If no file is uploaded, the post will display text only — that's fine.
      </p>
    </div>
  );
};

// ── PUBLISH BUTTON ROW ────────────────────────────────────────────────
const PublishRow = ({ onSave, onPublish, saved, label = "Post" }) => (
  <div
    style={{
      display: "flex",
      gap: "10px",
      paddingTop: "20px",
      borderTop: "1px solid #F3F4F6",
    }}
  >
    <button
      type="button"
      onClick={onPublish}
      style={{
        flex: 1,
        padding: "14px",
        background: "#2F8AC9",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      🚀 Publish {label}
    </button>
    <button
      type="button"
      onClick={onSave}
      style={{
        padding: "14px 20px",
        background: "#F8F9FB",
        color: "#6B7280",
        border: "1.5px solid #E5E7EB",
        borderRadius: "8px",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "2px",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {saved ? "✓ Saved" : "💾 Draft"}
    </button>
  </div>
);

// ── HISTORY LIST ──────────────────────────────────────────────────────
const HistoryList = ({ items, onLoad, onDelete, emptyMsg }) => {
  if (!items.length)
    return (
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "16px",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "40px",
            opacity: 0.2,
            display: "block",
            marginBottom: "14px",
          }}
        >
          📭
        </span>
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#9CA3AF",
          }}
        >
          {emptyMsg}
        </p>
      </div>
    );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {items.map((item, i) => (
        <div
          key={item.id || i}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "12px",
            padding: "18px 22px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            transition: "box-shadow 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          <span style={{ fontSize: "22px", flexShrink: 0 }}>
            {item.coverEmoji || item.icon || "📄"}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "16px",
                fontWeight: 700,
                color: "#0D1117",
                margin: "0 0 3px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {item.title || "(No title)"}
            </p>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "11px",
                fontWeight: 300,
                color: "#9CA3AF",
                margin: 0,
              }}
            >
              {item.category || item.tag || ""} · Saved{" "}
              {item.savedAt ? new Date(item.savedAt).toLocaleString() : ""}
            </p>
          </div>
          <button
            onClick={() => onLoad(item)}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#2F8AC9",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "6px 12px",
              flexShrink: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#1A5A99")}
            onMouseLeave={(e) => (e.target.style.color = "#2F8AC9")}
            title="Load this item into the editor"
          >
            Load →
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(item.id || i);
            }}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              color: "#DC2626",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "6px 8px",
              flexShrink: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#991B1B")}
            onMouseLeave={(e) => (e.target.style.color = "#DC2626")}
            title="Delete this item"
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════
// MAIN DASHBOARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════

const AdminDashboard = () => {
  const navigate = useNavigate();

  // ── Active section + sub-tab ──────────────────────
  const [section, setSection] = useState("daily");
  const [subTab, setSubTab] = useState("compose"); // compose | history

  const isMobile = window.innerWidth <= 768;

  const responsiveGrid2 = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: "12px",
  };

  const responsiveGrid3 = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
    gap: "12px",
  };

  // ── Auth guard ────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/admin");
    });
  }, [navigate]);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  // ── Form states ───────────────────────────────────
  const [daily, setDaily] = useState(EMPTY_DAILY);
  const [blog, setBlog] = useState(EMPTY_BLOG);
  const [project, setProject] = useState(EMPTY_PROJECT);
  const [program, setProgram] = useState(EMPTY_PROGRAM);
  const [gallery, setGallery] = useState(EMPTY_GALLERY);

  // ── Saved flags ───────────────────────────────────
  const [dailySaved, setDailySaved] = useState(false);
  const [blogSaved, setBlogSaved] = useState(false);
  const [projectSaved, setProjectSaved] = useState(false);
  const [programSaved, setProgramSaved] = useState(false);
  const [gallerySaved, setGallerySaved] = useState(false);

  // ── History ───────────────────────────────────────
  const [dailyHist, setDailyHist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("fa_daily") || "[]");
    } catch {
      return [];
    }
  });
  const [blogHist, setBlogHist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("fa_blog") || "[]");
    } catch {
      return [];
    }
  });
  const [projectHist, setProjectHist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("fa_project") || "[]");
    } catch {
      return [];
    }
  });
  const [programHist, setProgramHist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("fa_program") || "[]");
    } catch {
      return [];
    }
  });
  const [galleryHist, setGalleryHist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("fa_gallery") || "[]");
    } catch {
      return [];
    }
  });

  // ── Save helpers ──────────────────────────────────
  const saveToHistory = (key, item, setHist, supabaseId = null) => {
    const entry = {
      ...item,
      id: Date.now(),
      supabaseId: supabaseId, // Store the Supabase ID for deletion
      savedAt: new Date().toISOString(),
    };
    const updated = [
      entry,
      ...JSON.parse(localStorage.getItem(key) || "[]"),
    ].slice(0, 30);
    localStorage.setItem(key, JSON.stringify(updated));
    setHist(updated);
    return entry;
  };

  const handleSave = (key, data, setHist, setSaved) => {
    saveToHistory(key, data, setHist);
    setSaved(true);
  };

  // ── Upload media file to Supabase Storage ────────────
  const uploadMedia = async (file, folder) => {
    if (!file) return null;

    const ext = file.name.split(".").pop();
    const fileName = `${folder}/${Date.now()}.${ext}`;

    const { data, error } = await supabase.storage
      .from("media")
      .upload(fileName, file, { cacheControl: "3600", upsert: false });

    if (error) {
      console.error("Upload error:", error);
      return null;
    }

    // Get the public URL
    const { data: urlData } = supabase.storage
      .from("media")
      .getPublicUrl(fileName);

    return urlData.publicUrl;
  };

  // ── Helper to map form data to database columns ─────
  const buildRecord = (table, data, mediaUrl) => {
    if (table === "gallery_items") {
      return {
        alt: data.alt,
        category: data.category,
        media_url: mediaUrl,
        media_type: data.mediaType || "image",
        emoji: data.emoji || "🌍",
        published: true,
      };
    }
    if (table === "daily_posts") {
      return {
        date: data.date,
        tag: data.tag,
        tag_color: data.tagColor,
        title: data.title,
        cover_emoji: data.coverEmoji,
        media_url: mediaUrl,
        media_type: data.mediaType || "image",
        body: data.body.filter((p) => p.trim()),
        highlight: data.highlight,
        author: data.author,
        author_role: data.authorRole,
        location: data.location,
        time: data.time,
        published: true,
      };
    }
    if (table === "blog_posts") {
      return {
        slug: data.slug,
        category: data.category,
        title: data.title,
        excerpt: data.excerpt,
        body_paragraphs: data.body.filter((p) => p.trim()),
        author: data.author,
        author_initials: data.authorInitials,
        read_time: data.readTime,
        cover_url: mediaUrl,
        published: true,
      };
    }
    if (table === "projects") {
      return {
        title: data.title,
        category: data.category,
        status: data.status,
        location: data.location,
        year: data.year,
        description: data.description,
        outcomes: data.outcomes.filter((o) => o.trim()),
        icon: data.icon,
        cover_url: mediaUrl,
        media_type: data.mediaType || "image",
        published: true,
      };
    }
    if (table === "programs") {
      return {
        num: data.num,
        icon: data.icon,
        title: data.title,
        description: data.desc,
        stat: data.stat,
        cover_url: mediaUrl,
        published: true,
      };
    }
  };

  // ── Publish to Supabase ──────────────────────────────
  const handlePublish = async (
    table,
    data,
    mediaFile,
    mediaFolder,
    setHist,
    setSaved,
    storageKey,
  ) => {
    try {
      // 1. Upload media file if one was chosen
      let mediaUrl = null;
      if (mediaFile) {
        mediaUrl = await uploadMedia(mediaFile, mediaFolder);
      }

      // 2. Build the database record
      const record = buildRecord(table, data, mediaUrl);

      // 3. Save to Supabase
      const { data: insertedData, error } = await supabase
        .from(table)
        .insert(record)
        .select();

      if (error) {
        alert("Error publishing: " + error.message);
        return;
      }

      // 4. Also save to local history with the Supabase ID
      const supabaseId = insertedData?.[0]?.id;
      saveToHistory(storageKey, data, setHist, supabaseId);
      setSaved(true);
      alert(`✅ Published successfully! It is now live on the website.`);
    } catch (err) {
      alert("Something went wrong: " + err.message);
    }
  };

  // ── Delete from Supabase & local history ──────────
  const handleDelete = async (itemId, table, storageKey, setHist, hist) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this item? This cannot be undone.",
      )
    ) {
      return;
    }

    try {
      // 1. Find the item in history
      const itemToDelete = hist.find((item) => item.id === itemId);

      // 2. If it has a Supabase ID, delete from Supabase
      if (itemToDelete && itemToDelete.supabaseId) {
        const { error } = await supabase
          .from(table)
          .delete()
          .eq("id", itemToDelete.supabaseId);

        if (error) {
          alert("Error deleting from published: " + error.message);
          return;
        }
      }

      // 3. Remove from local history
      const updated = hist.filter((item) => item.id !== itemId);
      localStorage.setItem(storageKey, JSON.stringify(updated));
      setHist(updated);

      alert("✅ Item deleted successfully!");
    } catch (err) {
      alert("Something went wrong: " + err.message);
    }
  };

  // ── Slug auto-generator ───────────────────────────
  const toSlug = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  // ── Array field helpers ───────────────────────────
  const arrChange = (setter, field, i, val) =>
    setter((p) => {
      const arr = [...p[field]];
      arr[i] = val;
      return { ...p, [field]: arr };
    });
  const arrAdd = (setter, field) =>
    setter((p) => ({ ...p, [field]: [...p[field], ""] }));
  const arrRemove = (setter, field, i) =>
    setter((p) => ({ ...p, [field]: p[field].filter((_, idx) => idx !== i) }));

  // ── Active tab highlight ──────────────────────────
  const activeTab = (id) => ({
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: isMobile ? "8px" : "10px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    padding: isMobile ? "8px 12px" : "10px 18px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    background: section === id ? "rgba(47,138,201,0.15)" : "transparent",
    color: section === id ? "#2F8AC9" : "rgba(200,214,232,0.45)",
    transition: "all 0.2s",
  });

  const subTabBtn = (id) => ({
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    padding: "8px 20px",
    borderRadius: "20px",
    border: "1.5px solid",
    borderColor: subTab === id ? "#2F8AC9" : "#E5E7EB",
    background: subTab === id ? "#2F8AC9" : "#FFFFFF",
    color: subTab === id ? "#FFFFFF" : "#6B7280",
    cursor: "pointer",
    transition: "all 0.2s",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8F9FB",
        overflowX: "hidden",
      }}
    >
      {/* ── TOP NAV ──────────────────────────── */}
      <nav
        style={{
          background: "#0F1E35",
          minHeight: isMobile ? "auto" : "60px",
          display: "flex",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          padding: isMobile ? "12px 16px" : "0 clamp(16px,3vw,40px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: "0 2px 20px rgba(0,0,0,0.25)",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #2F8AC9, #6C609E)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}
          >
            🌍
          </div>

          <div>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#F0F6FF",
                display: "block",
                lineHeight: 1,
              }}
            >
              Flux Aid
            </span>

            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "8px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(200,214,232,0.35)",
              }}
            >
              Admin Dashboard
            </span>
          </div>
        </div>

        {/* CENTER TABS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            overflowX: "auto",
            width: isMobile ? "100%" : "auto",
            scrollbarWidth: "none",
            paddingBottom: isMobile ? "4px" : 0,
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setSection(t.id);
                setSubTab("compose");
              }}
              style={activeTab(t.id)}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: isMobile ? "100%" : "auto",
            justifyContent: isMobile ? "space-between" : "flex-end",
          }}
        >
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(200,214,232,0.4)",
              textDecoration: "none",
              padding: "8px 12px",
              whiteSpace: "nowrap",
            }}
          >
            View Site ↗
          </a>

          <button
            onClick={logout}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "transparent",
              color: "rgba(200,214,232,0.5)",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Sign Out
          </button>
        </div>
      </nav>

      {/* ── PAGE AREA ────────────────────────── */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "clamp(24px,4vw,48px) clamp(16px,3vw,40px)",
        }}
      >
        {/* Sub-tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "32px",
            overflowX: "auto",
            scrollbarWidth: "none",
            paddingBottom: "4px",
          }}
        >
          <button
            onClick={() => setSubTab("compose")}
            style={subTabBtn("compose")}
          >
            ✏️ Compose
          </button>
          <button
            onClick={() => setSubTab("history")}
            style={subTabBtn("history")}
          >
            🗂 History
          </button>

          {section === "published" && <PublishedManager />}
        </div>

        {/* ════════════════════════════════════════
            DAILY ACTIVITY
        ════════════════════════════════════════ */}
        {section === "daily" && subTab === "compose" && (
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "20px",
              padding: "clamp(20px,3vw,36px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #2F8AC9, #6C609E)",
                borderRadius: "20px 20px 0 0",
              }}
            />
            {sectionTitle(
              "Daily Activity Post",
              "What happened on the ground today?",
            )}

            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: "12px",
                }}
              >
                <div>
                  <label style={lbl}>Date *</label>
                  <input
                    value={daily.date}
                    onChange={(e) =>
                      setDaily((p) => ({ ...p, date: e.target.value }))
                    }
                    placeholder="e.g. Thursday, May 22, 2026"
                    style={inp}
                    onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>
                <div>
                  <label style={lbl}>Time</label>
                  <input
                    value={daily.time}
                    onChange={(e) =>
                      setDaily((p) => ({ ...p, time: e.target.value }))
                    }
                    placeholder="e.g. 8:00 AM"
                    style={inp}
                    onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: "12px",
                }}
              >
                <div>
                  <label style={lbl}>Category</label>
                  <select
                    value={daily.tag}
                    onChange={(e) =>
                      setDaily((p) => ({ ...p, tag: e.target.value }))
                    }
                    style={{ ...inp, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  >
                    {TAGS.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={lbl}>Accent Colour</label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {["#2F8AC9", "#6C609E"].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setDaily((p) => ({ ...p, tagColor: c }))}
                        style={{
                          flex: 1,
                          height: "44px",
                          background: c,
                          borderRadius: "8px",
                          border:
                            daily.tagColor === c
                              ? "3px solid #0D1117"
                              : "3px solid transparent",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label style={lbl}>Title *</label>
                <input
                  value={daily.title}
                  onChange={(e) =>
                    setDaily((p) => ({ ...p, title: e.target.value }))
                  }
                  placeholder="e.g. Flux Aid Marks World Malaria Day 2026"
                  style={inp}
                  onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
              </div>
              <div>
                <label style={lbl}>Highlight Pill</label>
                <input
                  value={daily.highlight}
                  onChange={(e) =>
                    setDaily((p) => ({ ...p, highlight: e.target.value }))
                  }
                  placeholder="e.g. Free testing · 200 residents reached"
                  style={inp}
                  onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
              </div>

              {/* Cover emoji */}
              <div>
                <label style={lbl}>Cover Emoji (used when no photo)</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {EMOJIS.map((em) => (
                    <button
                      key={em}
                      type="button"
                      onClick={() =>
                        setDaily((p) => ({ ...p, coverEmoji: em }))
                      }
                      style={{
                        width: "38px",
                        height: "38px",
                        fontSize: "18px",
                        borderRadius: "8px",
                        border:
                          daily.coverEmoji === em
                            ? "2px solid #2F8AC9"
                            : "1.5px solid #E5E7EB",
                        background:
                          daily.coverEmoji === em
                            ? "rgba(47,138,201,0.08)"
                            : "#F8F9FB",
                        cursor: "pointer",
                      }}
                    >
                      {em}
                    </button>
                  ))}
                </div>
              </div>

              {/* Media upload */}
              <MediaUpload
                value={daily.coverImage}
                preview={daily.mediaPreview}
                type={daily.mediaType}
                onChange={(file, url, type) =>
                  setDaily((p) => ({
                    ...p,
                    coverImage: file,
                    mediaPreview: url,
                    mediaType: type,
                  }))
                }
              />

              {/* Body paragraphs */}
              <div>
                <label style={lbl}>Body Paragraphs *</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {daily.body.map((para, i) => (
                    <div key={i} style={{ position: "relative" }}>
                      <textarea
                        rows={3}
                        value={para}
                        onChange={(e) =>
                          arrChange(setDaily, "body", i, e.target.value)
                        }
                        placeholder={`Paragraph ${i + 1}...`}
                        style={{
                          ...inp,
                          resize: "vertical",
                          paddingRight: "44px",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#2F8AC9")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                      />
                      {daily.body.length > 1 && (
                        <button
                          type="button"
                          onClick={() => arrRemove(setDaily, "body", i)}
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "26px",
                            height: "26px",
                            borderRadius: "50%",
                            border: "1px solid #E5E7EB",
                            background: "#FFFFFF",
                            cursor: "pointer",
                            fontSize: "11px",
                            color: "#9CA3AF",
                          }}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => arrAdd(setDaily, "body")}
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#6C609E",
                      border: "1.5px dashed rgba(108,96,158,0.3)",
                      background: "transparent",
                      borderRadius: "6px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    + Add Paragraph
                  </button>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: "12px",
                }}
              >
                <div>
                  <label style={lbl}>Author</label>
                  <input
                    value={daily.author}
                    onChange={(e) =>
                      setDaily((p) => ({ ...p, author: e.target.value }))
                    }
                    style={inp}
                    onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>
                <div>
                  <label style={lbl}>Location</label>
                  <input
                    value={daily.location}
                    onChange={(e) =>
                      setDaily((p) => ({ ...p, location: e.target.value }))
                    }
                    style={inp}
                    onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>
              </div>

              <PublishRow
                onSave={() =>
                  handleSave("fa_daily", daily, setDailyHist, setDailySaved)
                }
                onPublish={() =>
                  handlePublish(
                    "daily_posts",
                    daily,
                    daily.coverImage,
                    "daily",
                    setDailyHist,
                    setDailySaved,
                    "fa_daily",
                  )
                }
                saved={dailySaved}
                label="Daily Post"
              />
            </div>
          </div>
        )}

        {section === "daily" && subTab === "history" && (
          <HistoryList
            items={dailyHist}
            onLoad={(p) => {
              setDaily(p);
              setSubTab("compose");
              setDailySaved(false);
            }}
            onDelete={(id) =>
              handleDelete(
                id,
                "daily_posts",
                "fa_daily",
                setDailyHist,
                dailyHist,
              )
            }
            emptyMsg="No daily posts saved yet."
          />
        )}

        {/* ════════════════════════════════════════
            BLOG POSTS
        ════════════════════════════════════════ */}
        {section === "blog" && subTab === "compose" && (
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "20px",
              padding: "clamp(20px,3vw,36px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #6C609E, #2F8AC9)",
                borderRadius: "20px 20px 0 0",
              }}
            />
            {sectionTitle(
              "New Blog Post",
              "Write an article, story, or report for the blog.",
            )}

            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div>
                <label style={lbl}>Title *</label>
                <input
                  value={blog.title}
                  onChange={(e) =>
                    setBlog((p) => ({
                      ...p,
                      title: e.target.value,
                      slug: toSlug(e.target.value),
                    }))
                  }
                  placeholder="e.g. What African youth need from NGOs in 2026"
                  style={inp}
                  onFocus={(e) => (e.target.style.borderColor = "#6C609E")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: "12px",
                }}
              >
                <div>
                  <label style={lbl}>Slug (auto-generated)</label>
                  <input
                    value={blog.slug}
                    onChange={(e) =>
                      setBlog((p) => ({ ...p, slug: e.target.value }))
                    }
                    placeholder="what-african-youth-need"
                    style={{
                      ...inp,
                      fontFamily: "monospace",
                      fontSize: "12px",
                      color: "#6C609E",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#6C609E")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>
                <div>
                  <label style={lbl}>Category</label>
                  <select
                    value={blog.category}
                    onChange={(e) =>
                      setBlog((p) => ({ ...p, category: e.target.value }))
                    }
                    style={{ ...inp, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#6C609E")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  >
                    {BLOG_CATS.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={lbl}>Excerpt / Summary *</label>
                <textarea
                  rows={3}
                  value={blog.excerpt}
                  onChange={(e) =>
                    setBlog((p) => ({ ...p, excerpt: e.target.value }))
                  }
                  placeholder="A short summary shown in the blog list..."
                  style={{ ...inp, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "#6C609E")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: "12px",
                }}
              >
                <div>
                  <label style={lbl}>Author</label>
                  <input
                    value={blog.author}
                    onChange={(e) =>
                      setBlog((p) => ({ ...p, author: e.target.value }))
                    }
                    style={inp}
                    onFocus={(e) => (e.target.style.borderColor = "#6C609E")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>
                <div>
                  <label style={lbl}>Read Time</label>
                  <input
                    value={blog.readTime}
                    onChange={(e) =>
                      setBlog((p) => ({ ...p, readTime: e.target.value }))
                    }
                    placeholder="e.g. 6 min read"
                    style={inp}
                    onFocus={(e) => (e.target.style.borderColor = "#6C609E")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>
              </div>

              <MediaUpload
                value={blog.coverImage}
                preview={blog.mediaPreview}
                type={blog.mediaType}
                onChange={(file, url, type) =>
                  setBlog((p) => ({
                    ...p,
                    coverImage: file,
                    mediaPreview: url,
                    mediaType: type,
                  }))
                }
                accept="image/*"
                label="Cover Image"
              />

              {/* Body */}
              <div>
                <label style={lbl}>Article Body *</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {blog.body.map((para, i) => (
                    <div key={i} style={{ position: "relative" }}>
                      <textarea
                        rows={4}
                        value={para}
                        onChange={(e) =>
                          arrChange(setBlog, "body", i, e.target.value)
                        }
                        placeholder={`Paragraph ${i + 1}...`}
                        style={{
                          ...inp,
                          resize: "vertical",
                          paddingRight: "44px",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#6C609E")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                      />
                      {blog.body.length > 1 && (
                        <button
                          type="button"
                          onClick={() => arrRemove(setBlog, "body", i)}
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "26px",
                            height: "26px",
                            borderRadius: "50%",
                            border: "1px solid #E5E7EB",
                            background: "#FFFFFF",
                            cursor: "pointer",
                            fontSize: "11px",
                            color: "#9CA3AF",
                          }}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => arrAdd(setBlog, "body")}
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#6C609E",
                      border: "1.5px dashed rgba(108,96,158,0.3)",
                      background: "transparent",
                      borderRadius: "6px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    + Add Paragraph
                  </button>
                </div>
              </div>

              <PublishRow
                onSave={() =>
                  handleSave("fa_blog", blog, setBlogHist, setBlogSaved)
                }
                onPublish={() =>
                  handlePublish(
                    "blog_posts",
                    blog,
                    blog.coverImage,
                    "blog",
                    setBlogHist,
                    setBlogSaved,
                    "fa_blog",
                  )
                }
                saved={blogSaved}
                label="Blog Post"
              />
            </div>
          </div>
        )}

        {section === "blog" && subTab === "history" && (
          <HistoryList
            items={blogHist}
            onLoad={(p) => {
              setBlog(p);
              setSubTab("compose");
              setBlogSaved(false);
            }}
            onDelete={(id) =>
              handleDelete(id, "blog_posts", "fa_blog", setBlogHist, blogHist)
            }
            emptyMsg="No blog posts saved yet."
          />
        )}

        {/* ════════════════════════════════════════
            PROJECTS
        ════════════════════════════════════════ */}
        {section === "projects" && subTab === "compose" && (
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "20px",
              padding: "clamp(20px,3vw,36px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #2F8AC9, #6C609E)",
                borderRadius: "20px 20px 0 0",
              }}
            />
            {sectionTitle(
              "New Project",
              "Add a project or initiative to the Projects page.",
            )}

            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div>
                <label style={lbl}>Project Title *</label>
                <input
                  value={project.title}
                  onChange={(e) =>
                    setProject((p) => ({ ...p, title: e.target.value }))
                  }
                  placeholder="e.g. DANGA Award 2024"
                  style={inp}
                  onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
                  gap: "12px",
                }}
              >
                <div>
                  <label style={lbl}>Category</label>
                  <select
                    value={project.category}
                    onChange={(e) =>
                      setProject((p) => ({ ...p, category: e.target.value }))
                    }
                    style={{ ...inp, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  >
                    {PROJ_CATS.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={lbl}>Status</label>
                  <select
                    value={project.status}
                    onChange={(e) =>
                      setProject((p) => ({ ...p, status: e.target.value }))
                    }
                    style={{ ...inp, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  >
                    {PROJ_STATUS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={lbl}>Year</label>
                  <input
                    value={project.year}
                    onChange={(e) =>
                      setProject((p) => ({ ...p, year: e.target.value }))
                    }
                    placeholder="e.g. 2026"
                    style={inp}
                    onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>
              </div>

              <div>
                <label style={lbl}>Location</label>
                <input
                  value={project.location}
                  onChange={(e) =>
                    setProject((p) => ({ ...p, location: e.target.value }))
                  }
                  placeholder="e.g. Abuja, Nigeria"
                  style={inp}
                  onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
              </div>

              <div>
                <label style={lbl}>Description *</label>
                <textarea
                  rows={4}
                  value={project.description}
                  onChange={(e) =>
                    setProject((p) => ({ ...p, description: e.target.value }))
                  }
                  placeholder="Describe what this project is about..."
                  style={{ ...inp, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
              </div>

              {/* Icon picker */}
              <div>
                <label style={lbl}>Project Icon</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {EMOJIS.map((em) => (
                    <button
                      key={em}
                      type="button"
                      onClick={() => setProject((p) => ({ ...p, icon: em }))}
                      style={{
                        width: "38px",
                        height: "38px",
                        fontSize: "18px",
                        borderRadius: "8px",
                        border:
                          project.icon === em
                            ? "2px solid #2F8AC9"
                            : "1.5px solid #E5E7EB",
                        background:
                          project.icon === em
                            ? "rgba(47,138,201,0.08)"
                            : "#F8F9FB",
                        cursor: "pointer",
                      }}
                    >
                      {em}
                    </button>
                  ))}
                </div>
              </div>

              <MediaUpload
                value={project.coverImage}
                preview={project.mediaPreview}
                type={project.mediaType}
                onChange={(file, url, type) =>
                  setProject((p) => ({
                    ...p,
                    coverImage: file,
                    mediaPreview: url,
                    mediaType: type,
                  }))
                }
                accept="image/*"
                label="Cover Image (optional)"
              />

              {/* Outcomes */}
              <div>
                <label style={lbl}>Key Outcomes</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {project.outcomes.map((o, i) => (
                    <div key={i} style={{ position: "relative" }}>
                      <input
                        value={o}
                        onChange={(e) =>
                          arrChange(setProject, "outcomes", i, e.target.value)
                        }
                        placeholder={`Outcome ${i + 1} — e.g. 200 residents screened`}
                        style={{ ...inp, paddingRight: "44px" }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#2F8AC9")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                      />
                      {project.outcomes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => arrRemove(setProject, "outcomes", i)}
                          style={{
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            transform: "translateY(-50%)",
                            width: "26px",
                            height: "26px",
                            borderRadius: "50%",
                            border: "1px solid #E5E7EB",
                            background: "#FFFFFF",
                            cursor: "pointer",
                            fontSize: "11px",
                            color: "#9CA3AF",
                          }}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => arrAdd(setProject, "outcomes")}
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#2F8AC9",
                      border: "1.5px dashed rgba(47,138,201,0.3)",
                      background: "transparent",
                      borderRadius: "6px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    + Add Outcome
                  </button>
                </div>
              </div>

              <PublishRow
                onSave={() =>
                  handleSave(
                    "fa_project",
                    project,
                    setProjectHist,
                    setProjectSaved,
                  )
                }
                onPublish={() =>
                  handlePublish(
                    "projects",
                    project,
                    project.coverImage,
                    "projects",
                    setProjectHist,
                    setProjectSaved,
                    "fa_project",
                  )
                }
                saved={projectSaved}
                label="Project"
              />
            </div>
          </div>
        )}

        {section === "projects" && subTab === "history" && (
          <HistoryList
            items={projectHist}
            onLoad={(p) => {
              setProject(p);
              setSubTab("compose");
              setProjectSaved(false);
            }}
            onDelete={(id) =>
              handleDelete(
                id,
                "projects",
                "fa_project",
                setProjectHist,
                projectHist,
              )
            }
            emptyMsg="No projects saved yet."
          />
        )}

        {/* ════════════════════════════════════════
            PROGRAMS
        ════════════════════════════════════════ */}
        {section === "programs" && subTab === "compose" && (
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "20px",
              padding: "clamp(20px,3vw,36px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #6C609E, #2F8AC9)",
                borderRadius: "20px 20px 0 0",
              }}
            />
            {sectionTitle(
              "New Programme",
              "Add or update a programme on the Programs page.",
            )}

            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div
                style={{
                  background: "#FFF8F3",
                  border: "1px solid rgba(47,138,201,0.15)",
                  borderRadius: "10px",
                  padding: "14px 18px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "#6B7280",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ fontWeight: 600, color: "#0D1117" }}>
                    Note:
                  </strong>{" "}
                  The site currently has 3 hardcoded programmes. When Supabase
                  is connected, these will be replaced by whatever you publish
                  here. For now, saving here stores it locally.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "12px",
                  alignItems: "end",
                }}
              >
                <div>
                  <label style={lbl}>Number</label>
                  <input
                    value={program.num}
                    onChange={(e) =>
                      setProgram((p) => ({ ...p, num: e.target.value }))
                    }
                    placeholder="01"
                    style={inp}
                    onFocus={(e) => (e.target.style.borderColor = "#6C609E")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>
                <div>
                  <label style={lbl}>Programme Title *</label>
                  <input
                    value={program.title}
                    onChange={(e) =>
                      setProgram((p) => ({ ...p, title: e.target.value }))
                    }
                    placeholder="e.g. Advocacy & Human Rights"
                    style={inp}
                    onFocus={(e) => (e.target.style.borderColor = "#6C609E")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>
              </div>

              <div>
                <label style={lbl}>Description *</label>
                <textarea
                  rows={4}
                  value={program.desc}
                  onChange={(e) =>
                    setProgram((p) => ({ ...p, desc: e.target.value }))
                  }
                  placeholder="Describe what this programme does and who it serves..."
                  style={{ ...inp, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "#6C609E")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
              </div>

              <div>
                <label style={lbl}>Impact Stat / Pill Text</label>
                <input
                  value={program.stat}
                  onChange={(e) =>
                    setProgram((p) => ({ ...p, stat: e.target.value }))
                  }
                  placeholder="e.g. 500+ lives reached"
                  style={inp}
                  onFocus={(e) => (e.target.style.borderColor = "#6C609E")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
              </div>

              {/* Icon picker */}
              <div>
                <label style={lbl}>Programme Icon</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {PROG_ICONS.map((em) => (
                    <button
                      key={em}
                      type="button"
                      onClick={() => setProgram((p) => ({ ...p, icon: em }))}
                      style={{
                        width: "38px",
                        height: "38px",
                        fontSize: "18px",
                        borderRadius: "8px",
                        border:
                          program.icon === em
                            ? "2px solid #6C609E"
                            : "1.5px solid #E5E7EB",
                        background:
                          program.icon === em
                            ? "rgba(108,96,158,0.08)"
                            : "#F8F9FB",
                        cursor: "pointer",
                      }}
                    >
                      {em}
                    </button>
                  ))}
                </div>
              </div>

              <MediaUpload
                value={program.coverImage}
                preview={program.mediaPreview}
                type={program.mediaType}
                onChange={(file, url, type) =>
                  setProgram((p) => ({
                    ...p,
                    coverImage: file,
                    mediaPreview: url,
                    mediaType: type,
                  }))
                }
                accept="image/*"
                label="Programme Cover Image (optional)"
              />

              <PublishRow
                onSave={() =>
                  handleSave(
                    "fa_program",
                    program,
                    setProgramHist,
                    setProgramSaved,
                  )
                }
                onPublish={() =>
                  handlePublish(
                    "programs",
                    program,
                    program.coverImage,
                    "programs",
                    setProgramHist,
                    setProgramSaved,
                    "fa_program",
                  )
                }
                saved={programSaved}
                label="Programme"
              />
            </div>
          </div>
        )}

        {section === "programs" && subTab === "history" && (
          <HistoryList
            items={programHist}
            onLoad={(p) => {
              setProgram(p);
              setSubTab("compose");
              setProgramSaved(false);
            }}
            onDelete={(id) =>
              handleDelete(
                id,
                "programs",
                "fa_program",
                setProgramHist,
                programHist,
              )
            }
            emptyMsg="No programmes saved yet."
          />
        )}

        {/* ════════════════════════════════════════
            GALLERY
        ════════════════════════════════════════ */}
        {section === "gallery" && subTab === "compose" && (
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "20px",
              padding: "clamp(20px,3vw,36px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #2F8AC9, #6C609E)",
                borderRadius: "20px 20px 0 0",
              }}
            />
            {sectionTitle(
              "Upload to Gallery",
              "Add a photo or video to the public gallery.",
            )}

            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Media upload — images AND videos */}
              <MediaUpload
                value={gallery.mediaFile}
                preview={gallery.mediaPreview}
                type={gallery.mediaType}
                onChange={(file, url, type) =>
                  setGallery((p) => ({
                    ...p,
                    mediaFile: file,
                    mediaPreview: url,
                    mediaType: type,
                  }))
                }
                accept="image/*,video/*"
                label="Photo or Video *"
              />

              {/* Show detected type */}
              {gallery.mediaType && gallery.mediaPreview && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color:
                        gallery.mediaType === "video" ? "#6C609E" : "#2F8AC9",
                      background:
                        gallery.mediaType === "video"
                          ? "rgba(108,96,158,0.12)"
                          : "rgba(47,138,201,0.12)",
                      border: `1px solid ${gallery.mediaType === "video" ? "rgba(108,96,158,0.3)" : "rgba(47,138,201,0.3)"}`,
                      padding: "4px 12px",
                      borderRadius: "4px",
                    }}
                  >
                    {gallery.mediaType === "video"
                      ? "🎬 Video detected"
                      : "🖼️ Image detected"}
                  </span>
                </div>
              )}

              <div>
                <label style={lbl}>Caption / Alt Text *</label>
                <input
                  value={gallery.alt}
                  onChange={(e) =>
                    setGallery((p) => ({ ...p, alt: e.target.value }))
                  }
                  placeholder="e.g. DANGA Award Ceremony 2024"
                  style={inp}
                  onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
              </div>

              <div>
                <label style={lbl}>Category</label>
                <select
                  value={gallery.category}
                  onChange={(e) =>
                    setGallery((p) => ({ ...p, category: e.target.value }))
                  }
                  style={{ ...inp, appearance: "none", cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Emoji fallback */}
              <div>
                <label style={lbl}>
                  Emoji Fallback (shown if media fails to load)
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {EMOJIS.map((em) => (
                    <button
                      key={em}
                      type="button"
                      onClick={() => setGallery((p) => ({ ...p, emoji: em }))}
                      style={{
                        width: "36px",
                        height: "36px",
                        fontSize: "17px",
                        borderRadius: "8px",
                        border:
                          gallery.emoji === em
                            ? "2px solid #2F8AC9"
                            : "1.5px solid #E5E7EB",
                        background:
                          gallery.emoji === em
                            ? "rgba(47,138,201,0.08)"
                            : "#F8F9FB",
                        cursor: "pointer",
                      }}
                    >
                      {em}
                    </button>
                  ))}
                </div>
              </div>

              <PublishRow
                onSave={() =>
                  handleSave(
                    "fa_gallery",
                    gallery,
                    setGalleryHist,
                    setGallerySaved,
                  )
                }
                onPublish={() =>
                  handlePublish(
                    "gallery_items",
                    gallery,
                    gallery.mediaFile,
                    "gallery",
                    setGalleryHist,
                    setGallerySaved,
                    "fa_gallery",
                  )
                }
                saved={gallerySaved}
                label="Gallery Item"
              />
            </div>
          </div>
        )}

        {section === "gallery" && subTab === "history" && (
          <div>
            {/* Gallery history as a grid */}
            {galleryHist.length === 0 ? (
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "16px",
                  padding: "60px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "40px",
                    opacity: 0.2,
                    display: "block",
                    marginBottom: "14px",
                  }}
                >
                  📭
                </span>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "#9CA3AF",
                  }}
                >
                  No gallery items saved yet.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: "12px",
                }}
              >
                {galleryHist.map((item, i) => (
                  <div
                    key={item.id || i}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E5E7EB",
                      borderRadius: "12px",
                      overflow: "hidden",
                      transition: "box-shadow 0.2s",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(0,0,0,0.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow = "none")
                    }
                  >
                    {/* Thumbnail */}
                    <div
                      onClick={() => {
                        setGallery(item);
                        setSubTab("compose");
                        setGallerySaved(false);
                      }}
                      style={{
                        height: "130px",
                        background: "#0F1E35",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        position: "relative",
                        cursor: "pointer",
                      }}
                    >
                      {item.mediaPreview ? (
                        item.mediaType === "video" ? (
                          <video
                            src={item.mediaPreview}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            muted
                          />
                        ) : (
                          <img
                            src={item.mediaPreview}
                            alt={item.alt}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        )
                      ) : (
                        <span style={{ fontSize: "36px", opacity: 0.2 }}>
                          {item.emoji || "🖼️"}
                        </span>
                      )}
                      {item.mediaType === "video" && (
                        <span
                          style={{
                            position: "absolute",
                            top: "8px",
                            right: "8px",
                            background: "rgba(108,96,158,0.8)",
                            borderRadius: "4px",
                            padding: "2px 7px",
                            fontFamily: "'Barlow Condensed',sans-serif",
                            fontSize: "8px",
                            fontWeight: 700,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            color: "white",
                          }}
                        >
                          VIDEO
                        </span>
                      )}
                    </div>
                    <div style={{ padding: "12px", flex: 1 }}>
                      <p
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "#0D1117",
                          margin: "0 0 3px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.alt || "(No caption)"}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "9px",
                          fontWeight: 600,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "#9CA3AF",
                          margin: "0 0 8px 0",
                        }}
                      >
                        {item.category}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(
                            item.id || i,
                            "gallery_items",
                            "fa_gallery",
                            setGalleryHist,
                            galleryHist,
                          );
                        }}
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: "10px",
                          fontWeight: 500,
                          color: "#DC2626",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          padding: "4px 0",
                          width: "100%",
                          textAlign: "center",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#991B1B")}
                        onMouseLeave={(e) => (e.target.style.color = "#DC2626")}
                        title="Delete this item"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
