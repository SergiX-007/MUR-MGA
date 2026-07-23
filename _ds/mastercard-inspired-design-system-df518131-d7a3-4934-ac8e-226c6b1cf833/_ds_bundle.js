/* @ds-bundle: {"format":4,"namespace":"MastercardInspiredDesignSystem_df5181","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"SatelliteButton","sourcePath":"components/buttons/SatelliteButton.jsx"},{"name":"Chip","sourcePath":"components/content/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"GhostHeadline","sourcePath":"components/content/GhostHeadline.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"CarouselCard","sourcePath":"components/media/CarouselCard.jsx"},{"name":"PortraitCard","sourcePath":"components/media/PortraitCard.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavPill","sourcePath":"components/navigation/NavPill.jsx"},{"name":"Wordmark","sourcePath":"components/navigation/Wordmark.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ef2643d04489","components/buttons/IconButton.jsx":"9cc39baa4cb9","components/buttons/SatelliteButton.jsx":"cc0e2867267d","components/content/Chip.jsx":"9d6f08695997","components/content/Eyebrow.jsx":"48d596059e81","components/content/GhostHeadline.jsx":"bff2c68d1961","components/forms/Input.jsx":"07ecdb24fed7","components/media/CarouselCard.jsx":"be222c9b6058","components/media/PortraitCard.jsx":"433b1551d80b","components/navigation/Footer.jsx":"d753feae61b7","components/navigation/NavPill.jsx":"582076d78b48","components/navigation/Wordmark.jsx":"e7b7d184e3f3","ui_kits/website/App.jsx":"73308385d224","ui_kits/website/CtaBand.jsx":"5e45c30113d0","ui_kits/website/Hero.jsx":"86e77efe0acb","ui_kits/website/SendWidget.jsx":"516e8316ffb1","ui_kits/website/ServicesSection.jsx":"8a759ba276a8","ui_kits/website/StoriesSection.jsx":"c2d994ebdde4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MastercardInspiredDesignSystem_df5181 = window.MastercardInspiredDesignSystem_df5181 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary marketing CTA and its variants.
 * The signature body button: an Ink Black pill with cream text at 20px radius.
 * Orange is reserved for consent/legal actions only.
 */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  // Bootstrap Icons class, e.g. "bi-arrow-right"
  iconPosition = 'right',
  as = 'button',
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '2px 20px',
      fontSize: 13,
      minHeight: 34
    },
    md: {
      padding: '6px 24px',
      fontSize: 16,
      minHeight: 40
    },
    lg: {
      padding: '16px 40px',
      fontSize: 18,
      minHeight: 56
    }
  };
  const variants = {
    primary: {
      background: 'var(--ink-black)',
      color: 'var(--canvas-cream)',
      border: '1.5px solid var(--ink-black)',
      borderRadius: 'var(--radius-btn)',
      fontWeight: 500
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--ink-black)',
      border: '1.5px solid var(--ink-black)',
      borderRadius: 'var(--radius-btn)',
      fontWeight: 450
    },
    consent: {
      background: 'var(--signal-orange)',
      color: 'var(--white)',
      border: '0',
      borderRadius: 'var(--radius-consent)',
      fontWeight: 400,
      padding: '1px 30px',
      letterSpacing: '0.13px',
      fontSize: 13
    },
    link: {
      background: 'transparent',
      color: 'var(--clay-brown)',
      border: '0',
      padding: '4px 0',
      fontWeight: 500,
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  };
  const Tag = as;
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-sans)',
    letterSpacing: '-0.32px',
    lineHeight: 1,
    cursor: 'pointer',
    transition: 'transform .12s ease, opacity .12s ease',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const iconEl = icon ? /*#__PURE__*/React.createElement("i", {
    className: `bi ${icon}`,
    style: {
      fontSize: '1.05em',
      lineHeight: 0
    },
    "aria-hidden": "true"
  }) : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: s,
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), icon && iconPosition === 'left' && iconEl, children, icon && iconPosition === 'right' && iconEl);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon-only circular button — carousel controls, play/pause, search toggle.
 * Outlined on cream; borderless when placed over media.
 */
function IconButton({
  icon,
  size = 40,
  variant = 'outline',
  // 'outline' | 'solid' | 'ghost' | 'on-media'
  as = 'button',
  style,
  ...rest
}) {
  const Tag = as;
  const variants = {
    outline: {
      background: 'transparent',
      color: 'var(--ink-black)',
      border: '1px solid var(--ink-black)'
    },
    solid: {
      background: 'var(--ink-black)',
      color: 'var(--canvas-cream)',
      border: 0
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-black)',
      border: 0
    },
    'on-media': {
      background: 'rgba(255,255,255,.92)',
      color: 'var(--ink-black)',
      border: 0
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'transform .12s ease, background .12s ease',
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `bi ${icon}`,
    style: {
      fontSize: size * 0.4,
      lineHeight: 0
    },
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/SatelliteButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The white circular satellite micro-CTA that docks onto the edge of a circular
 * portrait, protruding partway outside it. Carries a single dark arrow icon.
 */
function SatelliteButton({
  size = 56,
  icon = 'bi-arrow-right',
  as = 'button',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    "aria-label": "Open",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--white)',
      color: 'var(--ink-black)',
      border: 0,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-nav)',
      transition: 'transform .15s ease',
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `bi ${icon}`,
    style: {
      fontSize: size * 0.36,
      lineHeight: 0
    },
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { SatelliteButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/SatelliteButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Chip.jsx
try { (() => {
/**
 * Small white category tag, full-pill, used overlaid on media (e.g. "Story").
 */
function Chip({
  children,
  variant = 'light',
  icon,
  style
}) {
  const variants = {
    light: {
      background: 'var(--white)',
      color: 'var(--ink-black)'
    },
    ink: {
      background: 'var(--ink-black)',
      color: 'var(--canvas-cream)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-black)',
      border: '1px solid var(--ink-black)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '8px 20px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.28px',
      lineHeight: 1,
      ...variants[variant],
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: `bi ${icon}`,
    style: {
      fontSize: '1em',
      lineHeight: 0
    },
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Chip.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
/**
 * Section-category signal: a tiny accent dot + uppercase tracked label.
 * The dot is the identity — never omit it.
 */
function Eyebrow({
  children,
  dotColor = 'var(--accent-arc)',
  color = 'var(--ink-black)',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      lineHeight: 1,
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: dotColor,
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/GhostHeadline.jsx
try { (() => {
/**
 * Ghost watermark headline — oversized cream-on-cream text layered behind
 * portrait circles to set a section theme without competing with foreground copy.
 */
function GhostHeadline({
  children,
  size = 'var(--fs-watermark)',
  color = 'var(--whisper-cream)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size,
      fontWeight: 500,
      letterSpacing: '-2px',
      lineHeight: 1,
      color,
      userSelect: 'none',
      pointerEvents: 'none',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { GhostHeadline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GhostHeadline.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill text input — hairline ink outline, full-pill radius, optional leading icon.
 * Used for the expanded nav search and simple marketing forms.
 */
function Input({
  icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--white)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 24px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: `bi ${icon}`,
    style: {
      fontSize: 18,
      color: 'var(--slate-gray)',
      lineHeight: 0
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 450,
      color: 'var(--ink-black)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/media/CarouselCard.jsx
try { (() => {
/**
 * Tall pill/stadium carousel card: full-bleed photography with an overlaid
 * category chip and an optional oversized inline CTA.
 */
function CarouselCard({
  image,
  shape = 'stadium',
  // 'stadium' (40px corners) | 'pill' (999px)
  chip,
  title,
  ctaLabel,
  onCta,
  width = 460,
  height = 400,
  style
}) {
  const radius = shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-stadium)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      borderRadius: radius,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      background: image ? `center/cover no-repeat url("${image}")` : 'linear-gradient(155deg, #262627 0%, #4a2a12 55%, #9A3A0A 100%)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,.28) 0%, rgba(0,0,0,0) 34%, rgba(0,0,0,.42) 100%)'
    }
  }), chip && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      left: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Chip, null, chip)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 28,
      right: 28,
      bottom: 28,
      color: 'var(--white)'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: '-0.56px',
      lineHeight: 1.1,
      marginBottom: ctaLabel ? 20 : 0,
      maxWidth: '80%'
    }
  }, title), ctaLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    onClick: onCta,
    style: {
      borderRadius: 'var(--radius-stadium)'
    },
    icon: "bi-arrow-right"
  }, ctaLabel)));
}
Object.assign(__ds_scope, { CarouselCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/CarouselCard.jsx", error: String((e && e.message) || e) }); }

// components/media/PortraitCard.jsx
try { (() => {
/**
 * Service / solution portrait card: a square image cropped to a perfect circle,
 * with a white satellite CTA docked bottom-right, an eyebrow label, and a title.
 */
function PortraitCard({
  image,
  // image url; if omitted a warm placeholder is shown
  diameter = 300,
  eyebrow = 'Services',
  title,
  satelliteIcon = 'bi-arrow-right',
  onOpen,
  align = 'left',
  // text alignment under the portrait
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: diameter,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: diameter,
      height: diameter
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      overflow: 'hidden',
      background: image ? `center/cover no-repeat url("${image}")` : 'radial-gradient(120% 120% at 30% 25%, #F79E1B 0%, #CF4500 45%, #9A3A0A 78%, var(--canvas-cream) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -6,
      bottom: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SatelliteButton, {
    size: Math.round(diameter * 0.19),
    icon: satelliteIcon,
    onClick: onOpen
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 500,
      letterSpacing: 'var(--ls-h3)',
      lineHeight: 'var(--lh-h3)',
      color: 'var(--ink-black)'
    }
  }, title)));
}
Object.assign(__ds_scope, { PortraitCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PortraitCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Wordmark.jsx
try { (() => {
/**
 * Plain-type wordmark placeholder.
 * No brand logo file was provided, and the real Mastercard mark (interlocking
 * red + yellow circles) is a trademark that must never be reconstructed — so the
 * brand name is rendered as clean type wherever a mark would go. Swap `name`
 * (or drop in a real SVG mark) once brand assets are supplied.
 */
function Wordmark({
  name = 'Meridian',
  color = 'var(--ink-black)',
  size = 22,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size,
      fontWeight: 700,
      letterSpacing: '-0.04em',
      lineHeight: 1,
      color,
      whiteSpace: 'nowrap',
      ...style
    }
  }, name);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const DEFAULT_COLUMNS = [{
  head: 'Products',
  links: ['Send money', 'Business pay', 'Cards', 'Exchange rates']
}, {
  head: 'Company',
  links: ['About us', 'Newsroom', 'Careers', 'Investors']
}, {
  head: 'Resources',
  links: ['Help center', 'Security', 'Developers', 'Status']
}, {
  head: 'Need help?',
  links: [{
    label: 'Contact support',
    icon: 'bi-chat-dots'
  }, {
    label: 'Find an agent',
    icon: 'bi-geo-alt'
  }, {
    label: 'Report a card',
    icon: 'bi-credit-card'
  }, {
    label: 'FAQ',
    icon: 'bi-question-circle'
  }]
}];

/**
 * Dark warm-black footer: conversational H2, 4-column link grid, and a bottom
 * row with copyright, legal small-print, a country pill and social icons.
 */
function Footer({
  brand = 'Meridian',
  headline = "We're always here when you need us",
  columns = DEFAULT_COLUMNS,
  country = 'Global (English)',
  socials = ['bi-linkedin', 'bi-facebook', 'bi-twitter-x', 'bi-youtube'],
  style
}) {
  const linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    color: 'var(--white)',
    textDecoration: 'none',
    fontSize: 'var(--fs-footer)',
    fontWeight: 450,
    lineHeight: '20px',
    opacity: 0.85
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-black)',
      color: 'var(--white)',
      fontFamily: 'var(--font-sans)',
      padding: '96px var(--page-gutter) 64px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap',
      marginBottom: 72
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h2)',
      fontWeight: 500,
      letterSpacing: 'var(--ls-h2)',
      lineHeight: 'var(--lh-h2)',
      maxWidth: 460
    }
  }, headline), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    name: brand,
    color: "var(--white)",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.head
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      opacity: 0.6,
      marginBottom: 20
    }
  }, col.head), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, col.links.map(l => {
    const label = typeof l === 'string' ? l : l.label;
    const icon = typeof l === 'string' ? null : l.icon;
    return /*#__PURE__*/React.createElement("li", {
      key: label
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: linkStyle,
      onMouseEnter: e => {
        e.currentTarget.style.opacity = 1;
      },
      onMouseLeave: e => {
        e.currentTarget.style.opacity = 0.85;
      }
    }, icon && /*#__PURE__*/React.createElement("i", {
      className: `bi ${icon}`,
      "aria-hidden": "true"
    }), label));
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--divider-on-ink)',
      margin: '56px 0 28px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap',
      fontSize: 13,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " ", brand), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--white)',
      textDecoration: 'none',
      opacity: 0.9
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--white)',
      textDecoration: 'none',
      opacity: 0.9
    }
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--white)',
      textDecoration: 'none',
      opacity: 0.9
    }
  }, "Your privacy choices")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'transparent',
      color: 'var(--white)',
      border: '1px solid var(--border-on-ink)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 20px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-globe2",
    "aria-hidden": "true"
  }), country, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-down",
    style: {
      fontSize: 12,
      opacity: 0.7
    },
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: 18
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s.replace('bi-', ''),
    style: {
      color: 'var(--white)',
      opacity: 0.8
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.8;
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi ${s}`,
    "aria-hidden": "true"
  }))))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavPill.jsx
try { (() => {
/**
 * Floating navigation pill — white, full-pill, docked ~24px below the viewport
 * top with a soft lift. Logo left, primary links centered, search right.
 */
function NavPill({
  brand = 'Meridian',
  links = ['For you', 'For business', 'For the world', 'For innovators', 'News and trends'],
  activeIndex = 0,
  onSearch,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      background: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-nav)',
      padding: '14px 20px 14px 32px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    name: brand
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--nav-link-gap)',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flex: 1,
      justifyContent: 'center'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--fs-nav)',
      fontWeight: 500,
      letterSpacing: 'var(--ls-nav)',
      color: 'var(--ink-black)',
      textDecoration: 'none',
      opacity: i === activeIndex ? 1 : 0.7,
      transition: 'opacity .12s ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = i === activeIndex ? 1 : 0.7;
    }
  }, l)))), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "bi-search",
    size: 48,
    variant: "outline",
    onClick: onSearch
  }));
}
Object.assign(__ds_scope, { NavPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavPill.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const NS = window.MastercardInspiredDesignSystem_df5181;
const {
  NavPill,
  Input,
  Footer
} = NS;
function TopNav() {
  const [searchOpen, setSearchOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 'var(--nav-top-margin)',
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      padding: '0 var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(1200px, 100%)'
    }
  }, /*#__PURE__*/React.createElement(NavPill, {
    brand: "Meridian",
    activeIndex: 0,
    onSearch: () => setSearchOpen(v => !v),
    links: ['For you', 'For business', 'For the world', 'Rates', 'News and trends']
  })), searchOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(640px, 100%)',
      animation: 'drop .18s ease'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "bi-search",
    placeholder: "Search Meridian \u2014 rates, countries, help",
    autoFocus: true,
    style: {
      boxShadow: 'var(--shadow-nav)'
    }
  })));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--canvas-cream)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(TopNav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ServicesSection, null), /*#__PURE__*/React.createElement(StoriesSection, null), /*#__PURE__*/React.createElement(CtaBand, null), /*#__PURE__*/React.createElement(Footer, {
    brand: "Meridian"
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CtaBand.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Chip
} = window.MastercardInspiredDesignSystem_df5181;
function CtaBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--page-gutter) var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-stadium)',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1b1b19 0%, #3a220f 55%, #9A3A0A 120%)',
      boxShadow: 'var(--shadow-card)',
      padding: 'clamp(48px, 8vw, 96px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--white)",
    dotColor: "var(--signal-orange-light)"
  }, "Get started"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '20px 0 28px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'clamp(32px, 5vw, 52px)',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.05,
      color: 'var(--white)'
    }
  }, "Your first transfer is on us."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 32px',
      fontSize: 18,
      fontWeight: 450,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,.8)',
      maxWidth: 460
    }
  }, "Download the app or send from the web in under two minutes. No hidden fees, ever."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    icon: "bi-arrow-right",
    style: {
      borderRadius: 'var(--radius-stadium)'
    }
  }, "Create an account"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "light",
    icon: "bi-apple"
  }, "App Store"), /*#__PURE__*/React.createElement(Chip, {
    variant: "light",
    icon: "bi-google-play"
  }, "Google Play"))))));
}
window.CtaBand = CtaBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CtaBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Eyebrow,
  Button
} = window.MastercardInspiredDesignSystem_df5181;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '160px var(--page-gutter) 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 420px',
      minWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Send money"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 24px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'clamp(40px, 6vw, 64px)',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.02,
      color: 'var(--ink-black)'
    }
  }, "Money that moves at the speed of family."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 36px',
      maxWidth: 460,
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      fontWeight: 450,
      lineHeight: 1.5,
      color: 'var(--granite)'
    }
  }, "Send to 180 countries with fees you can see before you send and money that arrives in minutes, not days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "bi-arrow-right",
    style: {
      borderRadius: 'var(--radius-stadium)'
    }
  }, "Start sending"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      borderRadius: 'var(--radius-stadium)'
    }
  }, "How it works")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      marginTop: 48,
      flexWrap: 'wrap'
    }
  }, [['180+', 'countries'], ['3 min', 'average arrival'], ['$2.99', 'flat fee']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: '-0.6px',
      color: 'var(--ink-black)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--slate-gray)',
      fontWeight: 450
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 400px',
      minWidth: 320,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SendWidget, null))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SendWidget.jsx
try { (() => {
const {
  Button,
  IconButton,
  Eyebrow
} = window.MastercardInspiredDesignSystem_df5181;
const RATES = {
  EUR: {
    rate: 0.92,
    symbol: '€',
    flag: 'Europe'
  },
  GBP: {
    rate: 0.79,
    symbol: '£',
    flag: 'United Kingdom'
  },
  INR: {
    rate: 83.2,
    symbol: '₹',
    flag: 'India'
  },
  NGN: {
    rate: 1580,
    symbol: '₦',
    flag: 'Nigeria'
  },
  PHP: {
    rate: 58.6,
    symbol: '₱',
    flag: 'Philippines'
  },
  MXN: {
    rate: 17.1,
    symbol: '$',
    flag: 'Mexico'
  }
};
const FEE = 2.99;
function CurrencyPill({
  code,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--soft-bone)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 14px 8px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--ink-black)',
      cursor: 'pointer'
    }
  }, code, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-down",
    style: {
      fontSize: 11,
      opacity: 0.6
    },
    "aria-hidden": "true"
  }));
}
function SendWidget() {
  const [amount, setAmount] = React.useState(500);
  const [to, setTo] = React.useState('INR');
  const [open, setOpen] = React.useState(false);
  const r = RATES[to];
  const receive = Math.max(0, amount - FEE) * r.rate;
  const fmt = n => n.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
  const fieldStyle = {
    background: 'var(--lifted-cream)',
    border: '1px solid var(--border-hairline)',
    borderRadius: 'var(--radius-stadium)',
    padding: '18px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      maxWidth: '100%',
      background: 'var(--white)',
      borderRadius: 'var(--radius-stadium)',
      boxShadow: 'var(--shadow-card)',
      padding: 32,
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Calculator"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '-0.48px',
      margin: '14px 0 24px'
    }
  }, "See it before you send"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: fieldStyle
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--slate-gray)',
      marginBottom: 6
    }
  }, "You send"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: amount,
    min: 0,
    onChange: e => setAmount(Math.max(0, Number(e.target.value))),
    style: {
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: '-0.6px',
      width: 160,
      color: 'var(--ink-black)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--soft-bone)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 16px',
      fontSize: 15,
      fontWeight: 500
    }
  }, "USD")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...fieldStyle,
      background: 'var(--canvas-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--slate-gray)',
      marginBottom: 6
    }
  }, "They receive"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: '-0.6px'
    }
  }, r.symbol, fmt(receive))), /*#__PURE__*/React.createElement(CurrencyPill, {
    code: to,
    onClick: () => setOpen(!open)
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: '100%',
      zIndex: 5,
      marginTop: 8,
      background: 'var(--white)',
      borderRadius: 24,
      boxShadow: 'var(--shadow-card)',
      padding: 8,
      width: 220
    }
  }, Object.keys(RATES).map(code => /*#__PURE__*/React.createElement("button", {
    key: code,
    onClick: () => {
      setTo(code);
      setOpen(false);
    },
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: code === to ? 'var(--soft-bone)' : 'transparent',
      border: 0,
      borderRadius: 16,
      padding: '12px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 450,
      cursor: 'pointer',
      color: 'var(--ink-black)'
    }
  }, /*#__PURE__*/React.createElement("span", null, code), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--slate-gray)',
      fontSize: 13
    }
  }, RATES[code].flag))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      color: 'var(--slate-gray)',
      fontWeight: 450,
      margin: '20px 4px 24px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Transfer fee ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink-black)',
      fontWeight: 500
    }
  }, "$", FEE)), /*#__PURE__*/React.createElement("span", null, "Rate ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink-black)',
      fontWeight: 500
    }
  }, "1 USD = ", r.rate, " ", to))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "bi-arrow-right",
    style: {
      width: '100%',
      justifyContent: 'center',
      padding: '14px 24px',
      fontSize: 17
    }
  }, "Send now"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 16,
      fontSize: 13,
      color: 'var(--slate-gray)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-shield-check",
    "aria-hidden": "true"
  }), "Bank-grade security \xB7 arrives in minutes"));
}
window.SendWidget = SendWidget;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SendWidget.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesSection.jsx
try { (() => {
const {
  PortraitCard,
  GhostHeadline
} = window.MastercardInspiredDesignSystem_df5181;
const SERVICES = [{
  eyebrow: 'Send',
  title: 'Cash pickup at 500k agents',
  offset: 0
}, {
  eyebrow: 'Send',
  title: 'Straight to a bank account',
  offset: 90
}, {
  eyebrow: 'Send',
  title: 'Top up a mobile wallet',
  offset: 24
}];
function ServicesSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--lifted-cream)',
      padding: 'var(--section-pad-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      top: -20,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement(GhostHeadline, {
    size: "clamp(80px, 14vw, 150px)"
  }, "Ways to send")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      paddingTop: 96,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 22,
      fontWeight: 450,
      lineHeight: 1.4,
      color: 'var(--ink-black)',
      margin: 0
    }
  }, "However your family wants to receive it, there is a way to send it \u2014 connected across one network.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1180 360",
    fill: "none",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M180 250 C 360 120, 520 300, 700 170 S 1000 90, 1080 210",
    stroke: "var(--signal-orange-light)",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      marginTop: s.offset
    }
  }, /*#__PURE__*/React.createElement(PortraitCard, {
    diameter: 280,
    eyebrow: s.eyebrow,
    title: s.title
  })))))));
}
window.ServicesSection = ServicesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StoriesSection.jsx
try { (() => {
const {
  CarouselCard,
  Eyebrow,
  IconButton
} = window.MastercardInspiredDesignSystem_df5181;
const STORIES = [{
  chip: 'Story',
  title: 'How the Okafor family sends home every payday'
}, {
  chip: 'Guide',
  title: 'Getting the best exchange rate, explained'
}, {
  chip: 'Story',
  title: 'A small shop in Manila, funded from abroad'
}, {
  chip: 'Product',
  title: 'Business payouts to 50 countries at once'
}];
function StoriesSection() {
  const scroller = React.useRef(null);
  const nudge = dir => {
    if (scroller.current) scroller.current.scrollBy({
      left: dir * 480,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 40,
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "News and trends"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-h2)',
      fontWeight: 500,
      letterSpacing: 'var(--ls-h2)',
      lineHeight: 'var(--lh-h2)',
      color: 'var(--ink-black)',
      maxWidth: 520
    }
  }, "Stories from the people who move money")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bi-chevron-left",
    variant: "outline",
    onClick: () => nudge(-1)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bi-chevron-right",
    variant: "outline",
    onClick: () => nudge(1)
  })))), /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    style: {
      display: 'flex',
      gap: 24,
      overflowX: 'auto',
      padding: '0 var(--page-gutter) 8px',
      scrollbarWidth: 'none'
    }
  }, STORIES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(CarouselCard, {
    width: 380,
    height: 420,
    chip: s.chip,
    title: s.title,
    ctaLabel: i % 2 === 0 ? 'Read' : undefined
  })))));
}
window.StoriesSection = StoriesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StoriesSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SatelliteButton = __ds_scope.SatelliteButton;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GhostHeadline = __ds_scope.GhostHeadline;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.CarouselCard = __ds_scope.CarouselCard;

__ds_ns.PortraitCard = __ds_scope.PortraitCard;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavPill = __ds_scope.NavPill;

__ds_ns.Wordmark = __ds_scope.Wordmark;

})();
