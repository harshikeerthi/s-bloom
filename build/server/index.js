import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, useLocation } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Award, BarChart3, BookOpen, Briefcase, Building2, Calendar, Camera, Check, CheckCircle2, ChevronDown, ChevronRight, FileText, Film, Globe, GraduationCap, Laptop, LayoutGrid, Lightbulb, Mail, Megaphone, Menu, MessageCircle, MessageSquare, MonitorSmartphone, PenTool, Pencil, Phone, Play, PlayCircle, Rocket, ShieldCheck, Sparkles, Target, TrendingUp, User, UserCheck, Users, Volume2, VolumeX, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link as Link$1 } from "react-router-dom";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region src/components/layout/Navbar.tsx
var Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const location = useLocation();
	const handleMobileClick = () => {
		setMobileMenuOpen(false);
		setDropdownOpen(false);
	};
	return /* @__PURE__ */ jsx("header", {
		className: "navbar",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container nav-container",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "logo-container",
					"aria-label": "sBLOOM Home",
					onClick: handleMobileClick,
					children: /* @__PURE__ */ jsx("img", {
						src: "/sbloom-logo-transparent.png",
						alt: "sBLOOM Logo",
						className: "logo-img"
					})
				}),
				/* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", {
					className: `nav-links ${mobileMenuOpen ? "mobile-open" : ""}`,
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: `nav-link ${location.pathname === "/" ? "active" : ""}`,
							"aria-current": location.pathname === "/" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "Home"
						}) }),
						/* @__PURE__ */ jsxs("li", {
							className: "nav-dropdown-wrapper",
							onMouseEnter: () => !mobileMenuOpen && setDropdownOpen(true),
							onMouseLeave: () => !mobileMenuOpen && setDropdownOpen(false),
							children: [/* @__PURE__ */ jsxs("button", {
								className: `nav-link nav-dropdown-btn ${location.pathname.includes("/industries") ? "active" : ""}`,
								onClick: () => mobileMenuOpen && setDropdownOpen(!dropdownOpen),
								children: ["Industries ", /* @__PURE__ */ jsx(ChevronDown, {
									size: 16,
									className: `dropdown-chevron ${dropdownOpen ? "rotated" : ""}`
								})]
							}), /* @__PURE__ */ jsx(AnimatePresence, { children: dropdownOpen && /* @__PURE__ */ jsx(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: 5
								},
								transition: { duration: .2 },
								className: "nav-dropdown",
								style: mobileMenuOpen ? {
									transform: "none",
									left: 0
								} : {
									transform: "translateX(-50%)",
									left: "50%"
								},
								children: [
									{
										name: "Education",
										desc: "Digital growth for education institutions",
										href: "/industries/education"
									},
									{
										name: "Healthcare",
										desc: "Digital growth for healthcare organizations",
										href: "/industries/healthcare"
									},
									{
										name: "Technology & IT",
										desc: "Digital growth for tech organizations",
										href: "/industries/technology"
									},
									{
										name: "Professional Services",
										desc: "Digital growth for professional firms",
										href: "/industries/professional-services"
									}
								].map((ind) => /* @__PURE__ */ jsxs(Link, {
									to: ind.href,
									className: `dropdown-item ${location.pathname === ind.href ? "active" : ""}`,
									"aria-current": location.pathname === ind.href ? "page" : void 0,
									onClick: handleMobileClick,
									children: [/* @__PURE__ */ jsxs("div", {
										className: "dropdown-item-content",
										children: [/* @__PURE__ */ jsx("span", {
											className: "dropdown-item-title",
											children: ind.name
										}), /* @__PURE__ */ jsx("span", {
											className: "dropdown-item-desc",
											children: ind.desc
										})]
									}), /* @__PURE__ */ jsx("span", {
										className: "dropdown-item-arrow",
										children: "→"
									})]
								}, ind.name))
							}) })]
						}),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/solutions",
							className: `nav-link ${location.pathname.includes("/solutions") ? "active" : ""}`,
							"aria-current": location.pathname === "/solutions" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "Solutions"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/how-it-works",
							className: `nav-link ${location.pathname === "/how-it-works" ? "active" : ""}`,
							"aria-current": location.pathname === "/how-it-works" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "How It Works"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: `nav-link ${location.pathname === "/about" ? "active" : ""}`,
							"aria-current": location.pathname === "/about" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "About"
						}) }),
						/* @__PURE__ */ jsx("li", {
							className: "nav-workspace-item",
							style: {
								marginLeft: "16px",
								borderLeft: "1px solid var(--border-subtle)",
								paddingLeft: "24px"
							},
							children: /* @__PURE__ */ jsx(Link, {
								to: "/creative-workspace",
								className: `nav-link ${location.pathname === "/creative-workspace" ? "active" : ""}`,
								style: {
									fontSize: "0.8rem",
									textTransform: "uppercase",
									letterSpacing: "1px"
								},
								onClick: handleMobileClick,
								children: "Creative Workspace"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							className: "nav-cta-item",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "btn btn-primary btn-nav",
								onClick: handleMobileClick,
								children: "Talk to sBLOOM"
							})
						})
					]
				}) }),
				/* @__PURE__ */ jsx("button", {
					className: "mobile-toggle",
					onClick: () => setMobileMenuOpen(!mobileMenuOpen),
					"aria-label": "Toggle navigation menu",
					children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
				})
			]
		})
	});
};
//#endregion
//#region src/components/layout/Footer.tsx
var Footer = () => {
	if (useLocation().pathname === "/contact") return null;
	return /* @__PURE__ */ jsx(motion.footer, {
		className: "footer-premium",
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "footer-main",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "footer-brand",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							"aria-label": "sBLOOM Home",
							className: "footer-logo-link",
							children: /* @__PURE__ */ jsx("img", {
								src: "/sbloom-logo-v2.jpg",
								alt: "sBLOOM Logo",
								className: "footer-logo"
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "footer-desc",
							children: "S-Bloom is a specialized digital growth partner for expertise-led organizations in healthcare, education, and professional services."
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "footer-cta-link",
							children: ["Talk to sBLOOM ", /* @__PURE__ */ jsx("span", {
								className: "arrow",
								children: "→"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "footer-links-grid",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "footer-nav-col",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "footer-nav-title",
									children: "INDUSTRIES"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/industries/education",
									className: "footer-nav-link",
									children: "Education"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/industries/healthcare",
									className: "footer-nav-link",
									children: "Healthcare"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/industries/professional-services",
									className: "footer-nav-link",
									children: "Consulting & Professional Services"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "footer-nav-col",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "footer-nav-title",
									children: "SOLUTIONS"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/solutions/build",
									className: "footer-nav-link",
									children: "Build"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/solutions/create",
									className: "footer-nav-link",
									children: "Create"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/solutions/promote",
									className: "footer-nav-link",
									children: "Promote"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "footer-nav-col",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "footer-nav-title",
									children: "COMPANY"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/about",
									className: "footer-nav-link",
									children: "About"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/how-it-works",
									className: "footer-nav-link",
									children: "How It Works"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "footer-nav-link",
									children: "Contact"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/creative-workspace",
									className: "footer-nav-link",
									children: "Creative Workspace"
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "footer-bottom-bar",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "footer-bottom-left",
						children: /* @__PURE__ */ jsxs("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" S-Bloom. All rights reserved."
						] })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-bottom-center",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/industries/healthcare",
								children: "Healthcare"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "dot",
								children: "•"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/industries/education",
								children: "Education"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "dot",
								children: "•"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/industries/professional-services",
								children: "Consulting"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "footer-bottom-right",
						children: /* @__PURE__ */ jsxs("div", {
							className: "contact-tiles-wrapper",
							children: [
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "C",
									label: "Instagram",
									icon: /* @__PURE__ */ jsx(Camera, { size: 16 }),
									href: "https://instagram.com",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "O",
									label: "WhatsApp",
									icon: /* @__PURE__ */ jsx(MessageCircle, { size: 16 }),
									href: "https://wa.me/",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "N",
									label: "LinkedIn",
									icon: /* @__PURE__ */ jsx(Briefcase, { size: 16 }),
									href: "https://linkedin.com",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "T",
									label: "Email",
									icon: /* @__PURE__ */ jsx(Mail, { size: 16 }),
									href: "mailto:hello@s-bloom.com",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "A",
									label: "Phone",
									icon: /* @__PURE__ */ jsx(Phone, { size: 16 }),
									href: "tel:+1234567890",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "C",
									label: "Website",
									icon: /* @__PURE__ */ jsx(Globe, { size: 16 }),
									href: "/",
									external: false
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "T",
									label: "Contact",
									icon: /* @__PURE__ */ jsx(ArrowRight, { size: 16 }),
									href: "/contact",
									external: false
								})
							]
						})
					})
				]
			})]
		})
	});
};
var ContactTile = ({ letter, label, icon, href, external }) => {
	const isInternal = !external;
	const content = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "tile-letter",
		children: letter
	}), /* @__PURE__ */ jsxs("div", {
		className: "tile-reveal",
		children: [/* @__PURE__ */ jsx("span", {
			className: "tile-icon",
			children: icon
		}), /* @__PURE__ */ jsx("span", {
			className: "tile-label",
			children: label
		})]
	})] });
	if (isInternal) return /* @__PURE__ */ jsx(Link, {
		to: href,
		className: "contact-tile",
		children: content
	});
	return /* @__PURE__ */ jsx("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "contact-tile",
		children: content
	});
};
//#endregion
//#region src/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	Layout: () => Layout,
	default: () => root_default
});
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsxs("div", {
				className: "app-layout",
				children: [
					/* @__PURE__ */ jsx(Navbar, {}),
					/* @__PURE__ */ jsx("main", {
						style: { flex: 1 },
						children
					}),
					/* @__PURE__ */ jsx(Footer, {})
				]
			}),
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
//#endregion
//#region src/components/ScrollReveal.tsx
var ScrollReveal = ({ children, delay = 0, className = "", threshold = .1 }) => {
	const [isVisible, setIsVisible] = useState(false);
	const domRef = useRef(null);
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setIsVisible(true);
			return;
		}
		if (domRef.current) {
			if (domRef.current.getBoundingClientRect().top <= window.innerHeight) {
				setIsVisible(true);
				return;
			}
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (domRef.current) observer.unobserve(domRef.current);
				}
			});
		}, {
			threshold,
			rootMargin: "0px 0px 20px 0px"
		});
		const currentRef = domRef.current;
		if (currentRef) observer.observe(currentRef);
		return () => {
			if (currentRef) observer.unobserve(currentRef);
		};
	}, [threshold]);
	const style = { transitionDelay: `${delay}ms` };
	return /* @__PURE__ */ jsx("div", {
		ref: domRef,
		className: `reveal-wrapper ${isVisible ? "reveal-visible" : "reveal-hidden"} ${className}`,
		style,
		children
	});
};
//#endregion
//#region src/components/home/DigitalGrowthSystem.tsx
var DigitalGrowthSystem = () => {
	const [hoveredStage, setHoveredStage] = useState(null);
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1024);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const stages = [
		{
			id: "build",
			num: "01",
			label: "BUILD",
			headline: "Be easier to find.",
			desc: "Establish a strong digital foundation with websites, local SEO, and business profiles.",
			services: [
				"Website Design & Development",
				"SEO",
				"Google Business Profile"
			],
			link: "/solutions/build",
			linkText: "Explore Build →"
		},
		{
			id: "create",
			num: "02",
			label: "CREATE",
			headline: "Be easier to understand.",
			desc: "Communicate expertise and value through meaningful content, video, and creative work.",
			services: [
				"Social Media Management",
				"Social Media Posts",
				"Reels and Videos",
				"Digital Content"
			],
			link: "/solutions/create",
			linkText: "Explore Create →"
		},
		{
			id: "promote",
			num: "03",
			label: "PROMOTE",
			headline: "Reach the people who matter.",
			desc: "Reach relevant audiences through targeted campaigns and distribution.",
			services: [
				"Meta Ads",
				"Google Ads",
				"Performance Marketing",
				"Campaign Management"
			],
			link: "/solutions/promote",
			linkText: "Explore Promote →"
		},
		{
			id: "grow",
			num: "04",
			label: "GROW",
			headline: "Drive sustainable growth.",
			desc: "The intended business outcome, turning a stronger digital presence into a foundation for business growth.",
			services: [
				"Increased Visibility",
				"Qualified Leads",
				"Brand Trust"
			],
			link: "/solutions",
			linkText: "Explore Solutions →"
		}
	];
	if (isMobile) return /* @__PURE__ */ jsx("section", {
		className: "dgs-section section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsx(ScrollReveal, {
				delay: 0,
				children: /* @__PURE__ */ jsxs("div", {
					className: "dgs-intro",
					children: [/* @__PURE__ */ jsx("span", {
						className: "dgs-label",
						children: "WHAT SBLOOM CHANGES"
					}), /* @__PURE__ */ jsx("h2", {
						className: "dgs-main-heading",
						children: "We turn what you do well into something people can see, understand and act on."
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "dgs-mobile-journey",
				children: stages.map((stage, idx) => /* @__PURE__ */ jsx(ScrollReveal, {
					delay: idx * 100,
					children: /* @__PURE__ */ jsxs("div", {
						className: "dgs-mobile-stage",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "dgs-mobile-num-label",
								children: [/* @__PURE__ */ jsx("span", {
									className: "dgs-m-num",
									children: stage.num
								}), /* @__PURE__ */ jsx("span", {
									className: "dgs-m-label",
									children: stage.label
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "dgs-m-headline",
								children: stage.headline
							}),
							/* @__PURE__ */ jsx("p", {
								className: "dgs-m-desc",
								children: stage.desc
							}),
							/* @__PURE__ */ jsx("div", {
								className: "dgs-m-services",
								children: stage.services.map((service, i) => /* @__PURE__ */ jsx("div", {
									className: "dgs-service-item",
									children: service
								}, i))
							}),
							/* @__PURE__ */ jsx(Link$1, {
								to: stage.link,
								className: "dgs-m-link",
								children: stage.linkText
							}),
							idx < stages.length - 1 && /* @__PURE__ */ jsx("div", { className: "dgs-m-line" })
						]
					})
				}, stage.id))
			})]
		})
	});
	return /* @__PURE__ */ jsx("section", {
		className: "dgs-section section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsx(ScrollReveal, {
				delay: 0,
				children: /* @__PURE__ */ jsxs("div", {
					className: "dgs-intro",
					children: [/* @__PURE__ */ jsx("span", {
						className: "dgs-label",
						children: "WHAT SBLOOM CHANGES"
					}), /* @__PURE__ */ jsx("h2", {
						className: "dgs-main-heading",
						children: "We turn what you do well into something people can see, understand and act on."
					})]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "dgs-system-wrapper",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "dgs-diagram-top",
						children: stages.map((stage) => {
							const isActive = hoveredStage === stage.id;
							return /* @__PURE__ */ jsxs("div", {
								className: `dgs-node ${isActive ? "active" : ""} ${hoveredStage !== null && !isActive ? "dimmed" : ""}`,
								children: [/* @__PURE__ */ jsx("span", {
									className: "dgs-node-num",
									children: stage.num
								}), /* @__PURE__ */ jsx("span", {
									className: "dgs-node-label",
									children: stage.label
								})]
							}, stage.id);
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "dgs-line-system",
						children: [/* @__PURE__ */ jsx("div", {
							className: "dgs-horizontal-line",
							children: /* @__PURE__ */ jsx("div", {
								className: "dgs-horizontal-line-highlight",
								style: {
									width: hoveredStage === "build" ? "12.5%" : hoveredStage === "create" ? "37.5%" : hoveredStage === "promote" ? "62.5%" : hoveredStage === "grow" ? "87.5%" : "0%",
									opacity: hoveredStage ? 1 : 0
								}
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "dgs-vertical-drops",
							children: [
								/* @__PURE__ */ jsx("div", { className: `dgs-v-drop ${hoveredStage === "build" ? "active" : ""}` }),
								/* @__PURE__ */ jsx("div", { className: `dgs-v-drop ${hoveredStage === "create" ? "active" : ""}` }),
								/* @__PURE__ */ jsx("div", { className: `dgs-v-drop ${hoveredStage === "promote" ? "active" : ""}` }),
								/* @__PURE__ */ jsx("div", { className: `dgs-v-drop ${hoveredStage === "grow" ? "active" : ""}` })
							]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "dgs-columns",
						onMouseLeave: () => setHoveredStage(null),
						children: stages.map((stage) => {
							const isActive = hoveredStage === stage.id;
							return /* @__PURE__ */ jsxs("div", {
								className: `dgs-col ${isActive ? "active" : ""} ${hoveredStage !== null && !isActive ? "dimmed" : ""}`,
								onMouseEnter: () => setHoveredStage(stage.id),
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "dgs-col-headline",
										children: stage.headline
									}),
									/* @__PURE__ */ jsx("p", {
										className: "dgs-col-desc",
										children: stage.desc
									}),
									/* @__PURE__ */ jsx("div", {
										className: "dgs-services-list",
										children: stage.services.map((service, i) => /* @__PURE__ */ jsx("div", {
											className: "dgs-service-item",
											children: service
										}, i))
									}),
									/* @__PURE__ */ jsx(Link$1, {
										to: stage.link,
										className: "dgs-explore-link",
										children: stage.linkText
									})
								]
							}, stage.id);
						})
					})
				]
			})]
		})
	});
};
//#endregion
//#region src/components/home/HeroFloatingIcons.tsx
var HeroFloatingIcons = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "hero-floating-icons-container",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ jsx("div", { className: "hero-icons-ambient-glow" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-1" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-2" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-3" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-4" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-5" }),
			/* @__PURE__ */ jsx("div", { className: "dof-blur-symbol dof-star" }),
			/* @__PURE__ */ jsx("div", { className: "dof-blur-symbol dof-google" }),
			/* @__PURE__ */ jsx("div", { className: "dof-blur-symbol dof-diamond" }),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-pen anim-float-focal",
				style: {
					top: "35%",
					left: "38%",
					zIndex: 20
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "92",
					height: "92",
					viewBox: "0 0 92 92",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "penNibGrad",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#4A372E"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#2E201A"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#1E1410"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "goldNibTip",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#FFF2B2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "40%",
										stopColor: "#E7BD62"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "85%",
										stopColor: "#C9952E"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#8F6216"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "saturnRing",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "0%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#C9952E",
										stopOpacity: "0.2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "35%",
										stopColor: "#E7BD62",
										stopOpacity: "0.95"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "70%",
										stopColor: "#FFF2B2",
										stopOpacity: "1"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#C9952E",
										stopOpacity: "0.2"
									})
								]
							})
						] }),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "46",
							cy: "48",
							rx: "42",
							ry: "14",
							stroke: "url(#saturnRing)",
							strokeWidth: "2",
							fill: "none",
							opacity: "0.6",
							strokeDasharray: "65 140"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 46 12 L 64 36 L 56 68 L 36 68 L 28 36 Z",
							fill: "url(#penNibGrad)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 46 16 L 46 44",
							stroke: "#C9952E",
							strokeWidth: "1.8",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "46",
							cy: "44",
							r: "3",
							fill: "#E7BD62"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 46 12 L 54 26 L 38 26 Z",
							fill: "url(#goldNibTip)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 33 66 L 59 66 L 57 74 L 35 74 Z",
							fill: "url(#goldNibTip)"
						}),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "46",
							cy: "48",
							rx: "42",
							ry: "14",
							stroke: "url(#saturnRing)",
							strokeWidth: "2.4",
							fill: "none",
							strokeDasharray: "130 90",
							strokeDashoffset: "-70"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "20",
							cy: "54",
							r: "3.5",
							fill: "#E7BD62"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-web anim-float-2",
				style: {
					top: "8%",
					left: "54%",
					zIndex: 14
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "86",
					height: "74",
					viewBox: "0 0 86 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "browserBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FBF8F2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#EDE1D1"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#D9C7B2"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "browserHeader",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "0%",
							children: [/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#4A372E"
							}), /* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#2E201A"
							})]
						})] }),
						/* @__PURE__ */ jsx("rect", {
							x: "4",
							y: "4",
							width: "78",
							height: "64",
							rx: "10",
							fill: "url(#browserBody)",
							stroke: "rgba(120, 90, 70, 0.25)",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 4 14 Q 4 4 14 4 L 72 4 Q 82 4 82 14 L 82 20 L 4 20 Z",
							fill: "url(#browserHeader)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "14",
							cy: "12",
							r: "2.4",
							fill: "#C9952E"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "22",
							cy: "12",
							r: "2.4",
							fill: "#E7BD62"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "30",
							cy: "12",
							r: "2.4",
							fill: "#785A46"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "12",
							y: "28",
							width: "30",
							height: "22",
							rx: "4",
							fill: "#785A46",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "17,45 23,37 29,45",
							fill: "#FBF8F2",
							opacity: "0.9"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "26,45 32,39 38,45",
							fill: "#E7BD62",
							opacity: "0.9"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "34",
							cy: "34",
							r: "2.5",
							fill: "#E7BD62"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "29",
							width: "26",
							height: "3.5",
							rx: "1.5",
							fill: "#4A372E",
							opacity: "0.75"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "37",
							width: "22",
							height: "3",
							rx: "1.5",
							fill: "#785A46",
							opacity: "0.6"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "44",
							width: "18",
							height: "3",
							rx: "1.5",
							fill: "#785A46",
							opacity: "0.45"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "12",
							y: "55",
							width: "62",
							height: "6",
							rx: "3",
							fill: "#C9952E",
							opacity: "0.85"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-seo anim-float-1",
				style: {
					top: "10%",
					left: "16%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "76",
					height: "76",
					viewBox: "0 0 76 76",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "lensRim",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#FFF2B2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#C9952E"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#63440F"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "lensGlass",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#2E201A"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "70%",
										stopColor: "#1E1410"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#120A07"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "handleGrad",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#785A46"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#35251F"
								})]
							})
						] }),
						/* @__PURE__ */ jsx("rect", {
							x: "46",
							y: "46",
							width: "12",
							height: "24",
							rx: "4",
							transform: "rotate(-45 46 46)",
							fill: "url(#handleGrad)",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "32",
							cy: "32",
							r: "22",
							fill: "url(#lensRim)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "32",
							cy: "32",
							r: "17",
							fill: "url(#lensGlass)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 23 38 L 30 31 L 34 35 L 41 26",
							stroke: "#E7BD62",
							strokeWidth: "2.4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 36 26 L 41 26 L 41 31",
							fill: "none",
							stroke: "#E7BD62",
							strokeWidth: "2.4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-analytics anim-float-3",
				style: {
					top: "22%",
					left: "32%",
					zIndex: 13
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "74",
					height: "74",
					viewBox: "0 0 74 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "bar1",
								x1: "0%",
								y1: "0%",
								x2: "0%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#785A46"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#35251F"
								})]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "bar2",
								x1: "0%",
								y1: "0%",
								x2: "0%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#4A372E"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#211C1A"
								})]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "bar3",
								x1: "0%",
								y1: "0%",
								x2: "0%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#2E201A"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#140D09"
								})]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "goldCap",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "0%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#FFF2B2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#E7BD62"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#C9952E"
									})
								]
							})
						] }),
						/* @__PURE__ */ jsx("rect", {
							x: "14",
							y: "40",
							width: "12",
							height: "22",
							rx: "3",
							fill: "url(#bar1)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "14",
							y: "38",
							width: "12",
							height: "4",
							rx: "2",
							fill: "url(#goldCap)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "31",
							y: "26",
							width: "12",
							height: "36",
							rx: "3",
							fill: "url(#bar2)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "31",
							y: "24",
							width: "12",
							height: "4",
							rx: "2",
							fill: "url(#goldCap)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "14",
							width: "12",
							height: "48",
							rx: "3",
							fill: "url(#bar3)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "12",
							width: "12",
							height: "4",
							rx: "2",
							fill: "url(#goldCap)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 10 46 C 22 42, 36 28, 58 10",
							stroke: "#E7BD62",
							strokeWidth: "2",
							strokeDasharray: "3 3",
							fill: "none",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "58",
							cy: "10",
							r: "3",
							fill: "#FFF2B2"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-pin anim-float-5",
				style: {
					top: "25%",
					left: "74%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "78",
					height: "82",
					viewBox: "0 0 78 82",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "pinBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FBF8F2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#EDE1D1"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#785A46"
								})
							]
						}), /* @__PURE__ */ jsxs("radialGradient", {
							id: "pinGoldCenter",
							cx: "40%",
							cy: "40%",
							r: "60%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFF2B2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#E7BD62"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#8F6216"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "39",
							cy: "74",
							rx: "20",
							ry: "6",
							fill: "#35251F",
							opacity: "0.2"
						}),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "39",
							cy: "74",
							rx: "26",
							ry: "7",
							stroke: "#C9952E",
							strokeWidth: "1",
							strokeDasharray: "4 4",
							fill: "none",
							opacity: "0.45"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 39 8 C 24 8, 14 18, 14 33 C 14 48, 35 68, 39 72 C 43 68, 64 48, 64 33 C 64 18, 54 8, 39 8 Z",
							fill: "url(#pinBody)",
							stroke: "rgba(120, 90, 70, 0.3)",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "39",
							cy: "32",
							r: "11",
							fill: "url(#pinGoldCenter)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 39 25 L 41 29 L 45 30 L 42 33 L 43 37 L 39 35 L 35 37 L 36 33 L 33 30 L 37 29 Z",
							fill: "#FFFFFF",
							opacity: "0.9"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-video anim-float-4",
				style: {
					top: "33%",
					left: "7%",
					zIndex: 11
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "74",
					height: "74",
					viewBox: "0 0 74 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "clapperBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#35251F"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#211C1A"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#120A07"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "playTriGrad",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFF2B2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#E7BD62"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#C9952E"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("rect", {
							x: "8",
							y: "10",
							width: "58",
							height: "15",
							rx: "3.5",
							fill: "url(#clapperBody)",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "18,10 24,10 18,25 12,25",
							fill: "#E7BD62",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "32,10 38,10 32,25 26,25",
							fill: "#E7BD62",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "46,10 52,10 46,25 40,25",
							fill: "#E7BD62",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "8",
							y: "23",
							width: "58",
							height: "42",
							rx: "4",
							fill: "url(#clapperBody)"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "30,34 30,54 48,44",
							fill: "url(#playTriGrad)"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-chat anim-float-4",
				style: {
					top: "56%",
					left: "17%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "76",
					height: "74",
					viewBox: "0 0 76 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: "bubbleBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FBF8F2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#EDE1D1"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#785A46"
								})
							]
						}) }),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 10 Q 12 4 22 4 L 54 4 Q 64 4 64 14 L 64 42 Q 64 52 54 52 L 28 52 L 14 66 L 16 52 Q 12 50 12 42 Z",
							fill: "url(#bubbleBody)",
							stroke: "rgba(120, 90, 70, 0.3)",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "27",
							cy: "28",
							r: "4",
							fill: "#35251F"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "38",
							cy: "28",
							r: "4",
							fill: "#785A46"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "49",
							cy: "28",
							r: "4",
							fill: "#C9952E"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-campaign anim-float-2",
				style: {
					top: "51%",
					left: "68%",
					zIndex: 13
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "78",
					height: "78",
					viewBox: "0 0 78 78",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "planeBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#4A372E"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#2E201A"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#1E1410"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "planeFold",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFF2B2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#E7BD62"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#8F6216"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 16,40 38,50",
							fill: "url(#planeBody)"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 38,50 44,66",
							fill: "#35251F"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 44,66 52,48",
							fill: "url(#planeFold)"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 38,50 68,14",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 56 C 20 54, 30 52, 38 50",
							stroke: "#E7BD62",
							strokeWidth: "1.5",
							strokeDasharray: "3 3",
							opacity: "0.75"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-team anim-float-1",
				style: {
					top: "66%",
					left: "46%",
					zIndex: 13
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "82",
					height: "76",
					viewBox: "0 0 82 76",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "teamCenter",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#4A372E"
							}), /* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#211C1A"
							})]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "teamSide",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#785A46"
							}), /* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#35251F"
							})]
						})] }),
						/* @__PURE__ */ jsx("circle", {
							cx: "23",
							cy: "24",
							r: "7",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 48 C 12 38, 17 34, 23 34 C 29 34, 34 38, 34 48 Z",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "59",
							cy: "24",
							r: "7",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 48 48 C 48 38, 53 34, 59 34 C 65 34, 70 38, 70 48 Z",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "41",
							cy: "18",
							r: "9",
							fill: "url(#teamCenter)",
							stroke: "#C9952E",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 27 50 C 27 38, 33 32, 41 32 C 49 32, 55 38, 55 50 Z",
							fill: "url(#teamCenter)",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 23 24 L 41 18 L 59 24",
							stroke: "#E7BD62",
							strokeWidth: "1.2",
							opacity: "0.65",
							strokeDasharray: "2 2"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-growth anim-float-5",
				style: {
					top: "71%",
					left: "78%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "74",
					height: "74",
					viewBox: "0 0 74 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: "growthGrad",
							x1: "0%",
							y1: "100%",
							x2: "100%",
							y2: "0%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#35251F"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#785A46"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "85%",
									stopColor: "#C9952E"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#FFF2B2"
								})
							]
						}) }),
						/* @__PURE__ */ jsx("rect", {
							x: "12",
							y: "52",
							width: "10",
							height: "14",
							rx: "2",
							fill: "#35251F"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "26",
							y: "42",
							width: "10",
							height: "24",
							rx: "2",
							fill: "#4A372E"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "40",
							y: "32",
							width: "10",
							height: "34",
							rx: "2",
							fill: "#785A46"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "54",
							y: "22",
							width: "10",
							height: "44",
							rx: "2",
							fill: "#C9952E"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 46 L 28 34 L 40 40 L 62 16",
							stroke: "url(#growthGrad)",
							strokeWidth: "3",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "56,14 65,14 65,23",
							fill: "#FFF2B2"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-reels anim-float-3",
				style: {
					top: "42%",
					left: "91%",
					zIndex: 10
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "68",
					height: "68",
					viewBox: "0 0 68 68",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: "reelsBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#4A372E"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#2E201A"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#1E1410"
								})
							]
						}) }),
						/* @__PURE__ */ jsx("rect", {
							x: "8",
							y: "8",
							width: "52",
							height: "52",
							rx: "14",
							fill: "url(#reelsBody)",
							stroke: "#C9952E",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "34",
							cy: "34",
							r: "14",
							stroke: "#E7BD62",
							strokeWidth: "2.2"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "31,27 31,41 42,34",
							fill: "#FFF2B2"
						})
					]
				})
			})
		]
	});
};
//#endregion
//#region src/components/home/HeroSubtleCurves.tsx
var HeroSubtleCurves = () => {
	const curve1 = "M -40,190 C 240,150 480,320 740,290 C 1000,260 1220,150 1480,180";
	const curve2 = "M -30,470 C 260,430 540,500 790,420 C 1030,340 1260,490 1480,430";
	const curve3 = "M 480,120 C 680,85 920,130 1120,190 C 1300,240 1400,190 1480,160";
	return /* @__PURE__ */ jsx("div", {
		className: "hero-subtle-curves-layer",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsxs("svg", {
			className: "hero-subtle-curves-svg",
			viewBox: "0 0 1440 600",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			preserveAspectRatio: "none",
			children: [
				/* @__PURE__ */ jsxs("defs", { children: [
					/* @__PURE__ */ jsxs("linearGradient", {
						id: "subtleGoldLine",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "0%",
						children: [
							/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#C9952E",
								stopOpacity: "0.08"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "25%",
								stopColor: "#C9952E",
								stopOpacity: "0.38"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "55%",
								stopColor: "#E7BD62",
								stopOpacity: "0.55"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "80%",
								stopColor: "#C9952E",
								stopOpacity: "0.4"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#C9952E",
								stopOpacity: "0.08"
							})
						]
					}),
					/* @__PURE__ */ jsxs("linearGradient", {
						id: "delicateStream",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "0%",
						children: [
							/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#C9952E",
								stopOpacity: "0"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "60%",
								stopColor: "#E7BD62",
								stopOpacity: "0.45"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#FFFFFF",
								stopOpacity: "0.75"
							})
						]
					}),
					/* @__PURE__ */ jsxs("filter", {
						id: "tinySparkleGlow",
						x: "-30%",
						y: "-30%",
						width: "160%",
						height: "160%",
						children: [/* @__PURE__ */ jsx("feGaussianBlur", {
							in: "SourceGraphic",
							stdDeviation: "1.5",
							result: "blur"
						}), /* @__PURE__ */ jsxs("feMerge", { children: [/* @__PURE__ */ jsx("feMergeNode", { in: "blur" }), /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })] })]
					})
				] }),
				/* @__PURE__ */ jsx("path", {
					d: curve1,
					stroke: "url(#subtleGoldLine)",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve2,
					stroke: "url(#subtleGoldLine)",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve3,
					stroke: "url(#subtleGoldLine)",
					strokeWidth: "0.85"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve1,
					stroke: "url(#delicateStream)",
					strokeWidth: "1.3",
					className: "subtle-curve-pulse pulse-1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve2,
					stroke: "url(#delicateStream)",
					strokeWidth: "1.2",
					className: "subtle-curve-pulse pulse-2"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve3,
					stroke: "url(#delicateStream)",
					strokeWidth: "1.1",
					className: "subtle-curve-pulse pulse-3"
				}),
				/* @__PURE__ */ jsxs("g", {
					filter: "url(#tinySparkleGlow)",
					children: [/* @__PURE__ */ jsx("path", {
						d: "M 0,-4.5 L 1.2,-1 L 4.5,0 L 1.2,1 L 0,4.5 L -1.2,1 L -4.5,0 L -1.2,-1 Z",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve1,
							dur: "11s",
							repeatCount: "indefinite"
						})
					}), /* @__PURE__ */ jsx("circle", {
						r: "1.5",
						fill: "#E7BD62",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve1,
							dur: "11s",
							repeatCount: "indefinite"
						})
					})]
				}),
				/* @__PURE__ */ jsx("g", {
					filter: "url(#tinySparkleGlow)",
					children: /* @__PURE__ */ jsx("path", {
						d: "M 0,-3 L 0.8,-0.8 L 3,0 L 0.8,0.8 L 0,3 L -0.8,0.8 L -3,0 L -0.8,-0.8 Z",
						fill: "#FFEBB0",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve1,
							dur: "11s",
							begin: "5.5s",
							repeatCount: "indefinite"
						})
					})
				}),
				/* @__PURE__ */ jsxs("g", {
					filter: "url(#tinySparkleGlow)",
					children: [/* @__PURE__ */ jsx("path", {
						d: "M 0,-5 L 1.3,-1.2 L 5,0 L 1.3,1.2 L 0,5 L -1.3,1.2 L -5,0 L -1.3,-1.2 Z",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve2,
							dur: "14s",
							repeatCount: "indefinite"
						})
					}), /* @__PURE__ */ jsx("circle", {
						r: "1.8",
						fill: "#E7BD62",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve2,
							dur: "14s",
							repeatCount: "indefinite"
						})
					})]
				}),
				/* @__PURE__ */ jsx("g", {
					filter: "url(#tinySparkleGlow)",
					children: /* @__PURE__ */ jsx("circle", {
						r: "1.6",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve2,
							dur: "14s",
							begin: "7s",
							repeatCount: "indefinite"
						})
					})
				}),
				/* @__PURE__ */ jsx("g", {
					filter: "url(#tinySparkleGlow)",
					children: /* @__PURE__ */ jsx("path", {
						d: "M 0,-3.8 L 1,-1 L 3.8,0 L 1,1 L 0,3.8 L -1,1 L -3.8,0 L -1,-1 Z",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve3,
							dur: "12s",
							repeatCount: "indefinite"
						})
					})
				})
			]
		})
	});
};
//#endregion
//#region src/components/home/DualPathCards.tsx
var DualPathCards = () => {
	return /* @__PURE__ */ jsxs("section", {
		className: "dual-path-section",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "dual-path-ambient-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "dual-path-curves-layer",
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsxs("svg", {
					className: "dual-path-curves-svg",
					viewBox: "0 0 1440 900",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					preserveAspectRatio: "none",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "dpWave1",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#E2D0B6",
									stopOpacity: "0.45"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#EDE0CA",
									stopOpacity: "0.25"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#E2D0B6",
									stopOpacity: "0.38"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "dpWave2",
							x1: "0%",
							y1: "100%",
							x2: "100%",
							y2: "0%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#DFCDAE",
									stopOpacity: "0.35"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#EAD8BD",
									stopOpacity: "0.2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#E2D0B6",
									stopOpacity: "0.3"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("path", {
							d: "M-40,160 C320,80 800,280 1480,140",
							stroke: "url(#dpWave1)",
							strokeWidth: "1.2",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M-40,240 C380,160 840,360 1480,220",
							stroke: "url(#dpWave2)",
							strokeWidth: "0.9",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M-40,740 C440,640 920,810 1480,690",
							stroke: "url(#dpWave1)",
							strokeWidth: "1.1",
							strokeLinecap: "round"
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "dual-path-sparkles-layer",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "dual-path-sparkle-star dp-sparkle-top-left-main",
						children: "✦"
					}),
					/* @__PURE__ */ jsx("span", { className: "dual-path-sparkle-dot dp-sparkle-top-left-dot" }),
					/* @__PURE__ */ jsx("span", {
						className: "dual-path-sparkle-star dp-sparkle-right-main",
						children: "✦"
					}),
					/* @__PURE__ */ jsx("span", { className: "dual-path-sparkle-dot dp-sparkle-right-dot" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "dual-path-container",
				children: [/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 0,
					children: /* @__PURE__ */ jsxs("div", {
						className: "dual-path-header",
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "dual-path-title",
							children: [
								"How can ",
								/* @__PURE__ */ jsx("span", {
									className: "title-highlight-gold",
									children: "S-Bloom"
								}),
								" help you grow?"
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "dual-path-subtitle",
							children: "Different goals. Tailored digital strategies."
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "dual-path-grid",
					children: [/* @__PURE__ */ jsx(ScrollReveal, {
						delay: 100,
						style: { height: "100%" },
						children: /* @__PURE__ */ jsxs("div", {
							className: "dual-path-card dual-path-card-business",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs("div", {
									className: "dual-path-card-header",
									children: [/* @__PURE__ */ jsx("div", {
										className: "dual-path-icon-box dual-path-icon-business",
										children: /* @__PURE__ */ jsx(BookOpen, {
											size: 21,
											strokeWidth: 2
										})
									}), /* @__PURE__ */ jsx("h3", {
										className: "dual-path-card-title",
										children: "sBLOOM for Business"
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "dual-path-card-desc",
									children: "Build your online presence, strengthen credibility, and reach the right audience."
								}),
								/* @__PURE__ */ jsxs("ul", {
									className: "dual-path-feature-list",
									children: [
										/* @__PURE__ */ jsxs("li", {
											className: "dual-path-feature-item",
											children: [/* @__PURE__ */ jsx("span", {
												className: "dual-path-check-badge dual-path-check-business",
												children: /* @__PURE__ */ jsx(Check, {
													size: 13,
													strokeWidth: 3
												})
											}), /* @__PURE__ */ jsx("span", {
												className: "dual-path-feature-text",
												children: "SEO and Google visibility"
											})]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "dual-path-feature-item",
											children: [/* @__PURE__ */ jsx("span", {
												className: "dual-path-check-badge dual-path-check-business",
												children: /* @__PURE__ */ jsx(Check, {
													size: 13,
													strokeWidth: 3
												})
											}), /* @__PURE__ */ jsx("span", {
												className: "dual-path-feature-text",
												children: "Websites and social media"
											})]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "dual-path-feature-item",
											children: [/* @__PURE__ */ jsx("span", {
												className: "dual-path-check-badge dual-path-check-business",
												children: /* @__PURE__ */ jsx(Check, {
													size: 13,
													strokeWidth: 3
												})
											}), /* @__PURE__ */ jsx("span", {
												className: "dual-path-feature-text",
												children: "Digital marketing and ads"
											})]
										})
									]
								})
							] }), /* @__PURE__ */ jsxs(Link, {
								to: "/contact",
								className: "dual-path-card-btn",
								children: [/* @__PURE__ */ jsx("span", { children: "Grow Your Business" }), /* @__PURE__ */ jsx(ArrowRight, {
									size: 16,
									strokeWidth: 2.2,
									className: "btn-arrow"
								})]
							})]
						})
					}), /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 200,
						style: { height: "100%" },
						children: /* @__PURE__ */ jsxs("div", {
							className: "dual-path-card dual-path-card-creative",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs("div", {
									className: "dual-path-card-header",
									children: [/* @__PURE__ */ jsx("div", {
										className: "dual-path-icon-box dual-path-icon-creative",
										children: /* @__PURE__ */ jsx(Pencil, {
											size: 21,
											strokeWidth: 2
										})
									}), /* @__PURE__ */ jsx("h3", {
										className: "dual-path-card-title",
										children: "Creative Workspace"
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "dual-path-card-desc",
									children: "Build your personal brand, showcase your work, and attract better opportunities."
								}),
								/* @__PURE__ */ jsxs("ul", {
									className: "dual-path-feature-list",
									children: [
										/* @__PURE__ */ jsxs("li", {
											className: "dual-path-feature-item",
											children: [/* @__PURE__ */ jsx("span", {
												className: "dual-path-check-badge dual-path-check-creative",
												children: /* @__PURE__ */ jsx(Check, {
													size: 13,
													strokeWidth: 3
												})
											}), /* @__PURE__ */ jsx("span", {
												className: "dual-path-feature-text",
												children: "Personal branding"
											})]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "dual-path-feature-item",
											children: [/* @__PURE__ */ jsx("span", {
												className: "dual-path-check-badge dual-path-check-creative",
												children: /* @__PURE__ */ jsx(Check, {
													size: 13,
													strokeWidth: 3
												})
											}), /* @__PURE__ */ jsx("span", {
												className: "dual-path-feature-text",
												children: "Portfolio and online presence"
											})]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "dual-path-feature-item",
											children: [/* @__PURE__ */ jsx("span", {
												className: "dual-path-check-badge dual-path-check-creative",
												children: /* @__PURE__ */ jsx(Check, {
													size: 13,
													strokeWidth: 3
												})
											}), /* @__PURE__ */ jsx("span", {
												className: "dual-path-feature-text",
												children: "Content and audience growth"
											})]
										})
									]
								})
							] }), /* @__PURE__ */ jsxs(Link, {
								to: "/creative-workspace",
								className: "dual-path-card-btn",
								children: [/* @__PURE__ */ jsx("span", { children: "Build Your Presence" }), /* @__PURE__ */ jsx(ArrowRight, {
									size: 16,
									strokeWidth: 2.2,
									className: "btn-arrow"
								})]
							})]
						})
					})]
				})]
			})
		]
	});
};
//#endregion
//#region src/components/home/BottomCornerScrollShowcase.tsx
var STAGES = [
	{
		id: 0,
		key: "camera",
		label: "Camera",
		icon: Camera
	},
	{
		id: 1,
		key: "reel",
		label: "Reel",
		icon: Film
	},
	{
		id: 2,
		key: "post",
		label: "Post",
		icon: FileText
	},
	{
		id: 3,
		key: "ad",
		label: "Ad",
		icon: Megaphone
	},
	{
		id: 4,
		key: "website",
		label: "Website",
		icon: Globe
	},
	{
		id: 5,
		key: "video",
		label: "Video",
		icon: Play
	}
];
var BottomCornerScrollShowcase = () => {
	const [activeStage, setActiveStage] = useState(0);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isMuted, setIsMuted] = useState(true);
	const [manualOverride, setManualOverride] = useState(false);
	const videoRef = useRef(null);
	const overrideTimerRef = useRef(null);
	const circleRadius = 44;
	const circumference = 2 * Math.PI * circleRadius;
	const strokeDashoffset = circumference - scrollProgress * circumference;
	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			if (scrollHeight <= 0) return;
			const progress = Math.min(1, Math.max(0, window.scrollY / scrollHeight));
			setScrollProgress(progress);
			if (!manualOverride) {
				if (progress < .18) setActiveStage(0);
				else if (progress < .36) setActiveStage(1);
				else if (progress < .54) setActiveStage(2);
				else if (progress < .72) setActiveStage(3);
				else if (progress < .88) setActiveStage(4);
				else setActiveStage(5);
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [manualOverride]);
	useEffect(() => {
		if (activeStage === 5 && videoRef.current) videoRef.current.play().catch(() => {});
		else if (videoRef.current) videoRef.current.pause();
	}, [activeStage]);
	const handleCircleClick = () => {
		const nextStage = (activeStage + 1) % STAGES.length;
		setActiveStage(nextStage);
		setManualOverride(true);
		if (overrideTimerRef.current) clearTimeout(overrideTimerRef.current);
		overrideTimerRef.current = setTimeout(() => {
			setManualOverride(false);
		}, 5e3);
	};
	const toggleSound = (e) => {
		e.stopPropagation();
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted;
			setIsMuted(videoRef.current.muted);
		}
	};
	const currentStageInfo = STAGES[activeStage];
	const IconComponent = currentStageInfo.icon;
	return /* @__PURE__ */ jsxs("div", {
		className: "corner-circle-widget-wrapper",
		"aria-label": "S-Bloom Small Circular Pipeline",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "corner-circle-label-pill",
			children: [
				activeStage === 0 && /* @__PURE__ */ jsx("span", { className: "circle-rec-dot" }),
				/* @__PURE__ */ jsx(IconComponent, {
					size: 13,
					color: "#D9A52E"
				}),
				/* @__PURE__ */ jsx("span", { children: currentStageInfo.label })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "corner-circle-orb",
			onClick: handleCircleClick,
			title: `Click to cycle stages (Currently: ${currentStageInfo.label})`,
			children: [
				/* @__PURE__ */ jsxs("svg", {
					className: "corner-circle-svg-ring",
					viewBox: "0 0 96 96",
					children: [
						/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: "goldRingGradient",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFE0A3"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#D9A52E"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#8F6216"
								})
							]
						}) }),
						/* @__PURE__ */ jsx("circle", {
							className: "circle-ring-bg",
							cx: "48",
							cy: "48",
							r: circleRadius
						}),
						/* @__PURE__ */ jsx("circle", {
							className: "circle-ring-progress",
							cx: "48",
							cy: "48",
							r: circleRadius,
							style: {
								strokeDasharray: circumference,
								strokeDashoffset
							}
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "corner-circle-lens-frame",
					children: [/* @__PURE__ */ jsx("div", { className: "corner-circle-lens-glare" }), /* @__PURE__ */ jsxs(AnimatePresence, {
						mode: "wait",
						children: [
							activeStage === 0 && /* @__PURE__ */ jsxs(motion.div, {
								className: "circle-content-canvas circle-view-camera",
								initial: {
									opacity: 0,
									scale: .9
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: 1.1
								},
								transition: { duration: .25 },
								children: [/* @__PURE__ */ jsx("img", {
									src: "/camera-studio-bloom.jpg",
									alt: "Cinema Camera",
									className: "circle-camera-img"
								}), /* @__PURE__ */ jsx("div", {
									className: "circle-camera-hud-badge",
									children: /* @__PURE__ */ jsx("span", { children: "● REC" })
								})]
							}, "circle-stage-camera"),
							activeStage === 1 && /* @__PURE__ */ jsxs(motion.div, {
								className: "circle-content-canvas circle-view-reel",
								initial: {
									opacity: 0,
									scale: .9
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: 1.1
								},
								transition: { duration: .25 },
								children: [/* @__PURE__ */ jsx("img", {
									src: "/about-studio-stage.jpg",
									alt: "Social Reel Stage",
									className: "circle-reel-img"
								}), /* @__PURE__ */ jsxs("div", {
									className: "circle-reel-center-icon",
									children: [/* @__PURE__ */ jsx("div", {
										className: "circle-reel-glyph",
										children: /* @__PURE__ */ jsx(Film, { size: 15 })
									}), /* @__PURE__ */ jsx("span", {
										className: "circle-reel-sub",
										children: "REEL"
									})]
								})]
							}, "circle-stage-reel"),
							activeStage === 2 && /* @__PURE__ */ jsxs(motion.div, {
								className: "circle-content-canvas circle-view-post",
								initial: {
									opacity: 0,
									scale: .9
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: 1.1
								},
								transition: { duration: .25 },
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "circle-post-avatar",
										children: "🌸"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "circle-post-text",
										children: "POST"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "circle-post-likes",
										children: "👍 1.8K"
									})
								]
							}, "circle-stage-post"),
							activeStage === 3 && /* @__PURE__ */ jsxs(motion.div, {
								className: "circle-content-canvas circle-view-ad",
								initial: {
									opacity: 0,
									scale: .9
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: 1.1
								},
								transition: { duration: .25 },
								children: [/* @__PURE__ */ jsx("div", {
									className: "circle-ad-icon-box",
									children: /* @__PURE__ */ jsx(Megaphone, { size: 16 })
								}), /* @__PURE__ */ jsx("div", {
									className: "circle-ad-tag",
									children: "AD"
								})]
							}, "circle-stage-ad"),
							activeStage === 4 && /* @__PURE__ */ jsxs(motion.div, {
								className: "circle-content-canvas circle-view-web",
								initial: {
									opacity: 0,
									scale: .9
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: 1.1
								},
								transition: { duration: .25 },
								children: [/* @__PURE__ */ jsx("div", {
									className: "circle-web-icon-box",
									children: /* @__PURE__ */ jsx(Globe, { size: 16 })
								}), /* @__PURE__ */ jsx("div", {
									className: "circle-web-url",
									children: "sbloom.co"
								})]
							}, "circle-stage-web"),
							activeStage === 5 && /* @__PURE__ */ jsxs(motion.div, {
								className: "circle-content-canvas circle-view-video",
								initial: {
									opacity: 0,
									scale: .9
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: 1.1
								},
								transition: { duration: .25 },
								children: [/* @__PURE__ */ jsx("video", {
									ref: videoRef,
									src: "/hero-studio-video.mp4",
									playsInline: true,
									loop: true,
									muted: isMuted,
									className: "circle-playing-video"
								}), /* @__PURE__ */ jsx("div", {
									className: "circle-video-badge-overlay",
									children: /* @__PURE__ */ jsx("span", { children: "● VIDEO" })
								})]
							}, "circle-stage-video")
						]
					})]
				}),
				activeStage === 5 && /* @__PURE__ */ jsx("button", {
					className: "circle-sound-toggle-btn",
					onClick: toggleSound,
					title: isMuted ? "Unmute S-Bloom video" : "Mute video",
					"aria-label": "Toggle audio",
					children: isMuted ? /* @__PURE__ */ jsx(VolumeX, { size: 13 }) : /* @__PURE__ */ jsx(Volume2, { size: 13 })
				})
			]
		})]
	});
};
//#endregion
//#region src/pages/HomePage.tsx
var HomePage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "home-page",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "hero-final-section",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "hero-bottom-silk-wrapper",
						"aria-hidden": "true",
						children: /* @__PURE__ */ jsxs("svg", {
							viewBox: "0 0 1440 180",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							preserveAspectRatio: "none",
							className: "hero-bottom-silk-svg",
							children: [
								/* @__PURE__ */ jsxs("defs", { children: [
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "silkFlow1",
										x1: "0%",
										y1: "0%",
										x2: "100%",
										y2: "100%",
										children: [
											/* @__PURE__ */ jsx("stop", {
												offset: "0%",
												stopColor: "#F5ECE0",
												stopOpacity: "0.45"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "35%",
												stopColor: "#EADBCC",
												stopOpacity: "0.75"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "70%",
												stopColor: "#F8F3EC",
												stopOpacity: "0.55"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "100%",
												stopColor: "#E6D5C3",
												stopOpacity: "0.8"
											})
										]
									}),
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "silkFlow2",
										x1: "100%",
										y1: "0%",
										x2: "0%",
										y2: "100%",
										children: [
											/* @__PURE__ */ jsx("stop", {
												offset: "0%",
												stopColor: "#EDE2D3",
												stopOpacity: "0.4"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "50%",
												stopColor: "#FBF8F2",
												stopOpacity: "0.85"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "100%",
												stopColor: "#DFCDB8",
												stopOpacity: "0.7"
											})
										]
									}),
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "silkSheen",
										x1: "0%",
										y1: "0%",
										x2: "100%",
										y2: "0%",
										children: [
											/* @__PURE__ */ jsx("stop", {
												offset: "0%",
												stopColor: "#FFFFFF",
												stopOpacity: "0"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "45%",
												stopColor: "#FFFFFF",
												stopOpacity: "0.6"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "55%",
												stopColor: "#FFFFFF",
												stopOpacity: "0.6"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "100%",
												stopColor: "#FFFFFF",
												stopOpacity: "0"
											})
										]
									})
								] }),
								/* @__PURE__ */ jsx("path", {
									d: "M 0,60 Q 360,140 720,70 T 1440,90 L 1440,180 L 0,180 Z",
									fill: "url(#silkFlow1)"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M 0,95 Q 380,40 760,110 T 1440,65 L 1440,180 L 0,180 Z",
									fill: "url(#silkFlow2)"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M 0,95 Q 380,40 760,110 T 1440,65",
									stroke: "url(#silkSheen)",
									strokeWidth: "2",
									fill: "none"
								})
							]
						})
					}),
					/* @__PURE__ */ jsx(HeroSubtleCurves, {}),
					/* @__PURE__ */ jsxs("div", {
						className: "hero-final-container",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "hero-final-content",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "hero-final-eyebrow",
									children: [/* @__PURE__ */ jsx("span", {
										className: "eyebrow-text",
										children: "DIGITAL GROWTH PARTNER"
									}), /* @__PURE__ */ jsx("span", { className: "eyebrow-line" })]
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "hero-final-title",
									children: [
										"We will help you",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "hero-mocha-gold",
											children: "bloom socially."
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "hero-final-desc",
									children: "Build digital authority, trust, and growth for a growing community of expertise-led businesses."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "hero-final-buttons",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "btn-final-primary",
										children: [/* @__PURE__ */ jsx("span", { children: "Talk to sBLOOM" }), /* @__PURE__ */ jsx("svg", {
											className: "btn-arrow-icon",
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.4",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
										})]
									}), /* @__PURE__ */ jsx(Link, {
										to: "/solutions",
										className: "btn-final-secondary",
										children: "See How We Help"
									})]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "hero-final-showcase",
							children: /* @__PURE__ */ jsx(HeroFloatingIcons, {})
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(DualPathCards, {}),
			/* @__PURE__ */ jsx(DigitalGrowthSystem, {}),
			/* @__PURE__ */ jsx("section", {
				style: {
					padding: "100px 0",
					backgroundColor: "var(--dark-bg)",
					color: "var(--bg-primary)"
				},
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					style: {
						display: "flex",
						flexWrap: "wrap",
						gap: "60px",
						alignItems: "center"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							flex: "1",
							minWidth: "300px"
						},
						children: /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 0,
							children: /* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "2.5rem",
									marginBottom: "20px"
								},
								children: "We start with your business. Then bring the right capabilities together."
							})
						})
					}), /* @__PURE__ */ jsx("div", {
						style: {
							flex: "1",
							minWidth: "300px"
						},
						children: /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 150,
							children: /* @__PURE__ */ jsx("ul", {
								style: {
									listStyle: "none",
									padding: 0
								},
								children: [
									"Strategy before execution.",
									"An approach shaped around the business.",
									"The right capabilities for the work.",
									"One connected approach to digital growth."
								].map((item, i) => /* @__PURE__ */ jsx("li", {
									style: {
										marginBottom: "15px",
										paddingBottom: "15px",
										borderBottom: "1px solid var(--dark-border)"
									},
									children: item
								}, i))
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					padding: "120px 0",
					backgroundColor: "var(--dark-bg-secondary)",
					color: "var(--gold-primary)",
					textAlign: "center"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 0,
						children: /* @__PURE__ */ jsxs("h2", {
							style: {
								fontSize: "3rem",
								letterSpacing: "4px",
								textTransform: "uppercase"
							},
							children: [
								"Believe ",
								/* @__PURE__ */ jsx("span", {
									style: { color: "var(--bg-primary)" },
									children: "→"
								}),
								" Begin ",
								/* @__PURE__ */ jsx("span", {
									style: { color: "var(--bg-primary)" },
									children: "→"
								}),
								" Become"
							]
						})
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					padding: "120px 0",
					backgroundColor: "var(--bg-primary)",
					textAlign: "center"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: "2.5rem",
								marginBottom: "20px"
							},
							children: "Your business has potential. Let’s help the right people see it."
						}), /* @__PURE__ */ jsx("div", {
							style: { marginTop: "40px" },
							children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "btn btn-primary",
								style: {
									padding: "15px 40px",
									fontSize: "1.1rem"
								},
								children: "Talk to sBLOOM"
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx(BottomCornerScrollShowcase, {})
		]
	});
};
//#endregion
//#region src/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta$11
});
var meta$11 = () => {
	return [
		{ title: "sBLOOM | Digital Growth Partner" },
		{
			name: "description",
			content: "S-Bloom is a specialized digital growth partner for expertise-led organizations."
		},
		{
			property: "og:title",
			content: "sBLOOM | Digital Growth Partner"
		},
		{
			property: "og:description",
			content: "S-Bloom is a specialized digital growth partner for expertise-led organizations."
		}
	];
};
var home_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(HomePage, {});
});
//#endregion
//#region src/pages/industries/EducationPage.tsx
var EducationPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "edu-page",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "edu-hero",
				children: [/* @__PURE__ */ jsx("div", {
					className: "edu-hero-ambient",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "edu-hero-grid",
						children: [/* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 0,
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "edu-hero-badge",
									children: [/* @__PURE__ */ jsx(GraduationCap, { size: 16 }), " SBLOOM · EDUCATION & ACADEMIA"]
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "edu-hero-title",
									children: [
										"Where Academic Excellence Meets ",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "edu-hero-highlight",
											children: "Inspiring Digital Authority."
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "edu-hero-desc",
									children: "Choosing an education is one of life’s most aspirational decisions. We help visionary universities, schools, training institutes, and educators close the gap between their academic quality and what students and parents understand about them."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "edu-hero-actions",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "edu-btn-primary",
										children: [/* @__PURE__ */ jsx("span", { children: "Request Education Strategy" }), /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
									}), /* @__PURE__ */ jsxs("a", {
										href: "#approach",
										className: "edu-btn-secondary",
										children: [/* @__PURE__ */ jsx("span", { children: "Explore Our Approach" }), /* @__PURE__ */ jsx(ChevronRight, { size: 18 })]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "edu-hero-proof",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "edu-proof-item",
											children: [/* @__PURE__ */ jsx(CheckCircle2, {
												size: 18,
												className: "edu-proof-icon"
											}), /* @__PURE__ */ jsx("span", { children: "Predictable Intake Cycles" })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "edu-proof-item",
											children: [/* @__PURE__ */ jsx(CheckCircle2, {
												size: 18,
												className: "edu-proof-icon"
											}), /* @__PURE__ */ jsx("span", { children: "Cinema-Grade Storytelling" })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "edu-proof-item",
											children: [/* @__PURE__ */ jsx(CheckCircle2, {
												size: 18,
												className: "edu-proof-icon"
											}), /* @__PURE__ */ jsx("span", { children: "Academic Compliance" })]
										})
									]
								})
							]
						}), /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 150,
							className: "edu-hero-visual-card",
							children: /* @__PURE__ */ jsxs("div", {
								className: "edu-hero-img-frame",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: "/institute_image.png",
										alt: "S-Bloom Education Campus and Students",
										className: "edu-hero-img"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "edu-float-badge badge-top-right",
										children: [/* @__PURE__ */ jsx("div", {
											className: "float-badge-icon",
											children: /* @__PURE__ */ jsx(TrendingUp, { size: 22 })
										}), /* @__PURE__ */ jsxs("div", {
											className: "float-badge-text",
											children: [/* @__PURE__ */ jsx("strong", { children: "+94% Tour-to-Enrollment" }), /* @__PURE__ */ jsx("span", { children: "High-Intent Prospective Families" })]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "edu-float-badge badge-bottom-left",
										children: [/* @__PURE__ */ jsx("div", {
											className: "float-badge-icon",
											children: /* @__PURE__ */ jsx(Sparkles, { size: 22 })
										}), /* @__PURE__ */ jsxs("div", {
											className: "float-badge-text",
											children: [/* @__PURE__ */ jsx("strong", { children: "Authentic Campus Life" }), /* @__PURE__ */ jsx("span", { children: "Cinema-Grade Student Stories" })]
										})]
									})
								]
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "edu-metrics-strip",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "edu-metrics-grid",
						children: [
							/* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 50,
								className: "edu-metric-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "edu-metric-num",
									children: "3.4x"
								}), /* @__PURE__ */ jsx("div", {
									className: "edu-metric-label",
									children: "Increase in Qualified Student Applications"
								})]
							}),
							/* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 100,
								className: "edu-metric-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "edu-metric-num",
									children: "62%"
								}), /* @__PURE__ */ jsx("div", {
									className: "edu-metric-label",
									children: "Reduction in Prospective Student Drop-Off"
								})]
							}),
							/* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 150,
								className: "edu-metric-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "edu-metric-num",
									children: "8.5M+"
								}), /* @__PURE__ */ jsx("div", {
									className: "edu-metric-label",
									children: "Verified Video Views for Campus Stories"
								})]
							}),
							/* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 200,
								className: "edu-metric-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "edu-metric-num",
									children: "100%"
								}), /* @__PURE__ */ jsx("div", {
									className: "edu-metric-label",
									children: "Academic Integrity & Regulatory Compliance"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "edu-dilemma-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("div", {
						className: "edu-section-header",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 0,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "edu-section-badge",
									children: "THE MODERN ENROLLMENT LANDSCAPE"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "edu-section-title",
									children: "The Enrollment Decision Has Evolved. Has Your Marketing?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "edu-section-subtitle",
									children: "Families no longer make life-defining decisions based on transactional admission banners. They look for genuine community proof, transparent academic outcomes, and unmistakable institutional authority."
								})
							]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "edu-dilemma-grid",
						children: [/* @__PURE__ */ jsx(ScrollReveal, {
							delay: 100,
							children: /* @__PURE__ */ jsxs("div", {
								className: "edu-dilemma-card dilemma-old",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "dilemma-tag",
										children: "The Traditional Way"
									}),
									/* @__PURE__ */ jsx("h3", { children: "Transactional Enrollment Banners" }),
									/* @__PURE__ */ jsx("p", { children: "Seasonal panic ad-bursts when admission deadlines loom, pushing generic prospectus downloads that erode long-term institutional prestige." }),
									/* @__PURE__ */ jsxs("ul", {
										className: "dilemma-points-list",
										children: [
											/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
												className: "point-cross",
												children: "✕"
											}), /* @__PURE__ */ jsx("span", { children: "Last-minute ad rushes targeting disengaged audiences" })] }),
											/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
												className: "point-cross",
												children: "✕"
											}), /* @__PURE__ */ jsx("span", { children: "Dry stock photography that fails to convey real campus spirit" })] }),
											/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
												className: "point-cross",
												children: "✕"
											}), /* @__PURE__ */ jsx("span", { children: "Confusing program pages leading to high inquiry drop-offs" })] }),
											/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
												className: "point-cross",
												children: "✕"
											}), /* @__PURE__ */ jsx("span", { children: "Invisible faculty credentials and silent academic leadership" })] })
										]
									})
								]
							})
						}), /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 200,
							children: /* @__PURE__ */ jsxs("div", {
								className: "edu-dilemma-card dilemma-new",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "dilemma-tag",
										children: "The S-Bloom System"
									}),
									/* @__PURE__ */ jsx("h3", { children: "Connected Digital Authority" }),
									/* @__PURE__ */ jsx("p", { children: "A year-round ecosystem of authentic student stories, faculty authority, and frictionless digital portals that make your institution the natural top choice." }),
									/* @__PURE__ */ jsxs("ul", {
										className: "dilemma-points-list",
										children: [
											/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
												className: "point-check",
												children: "✓"
											}), /* @__PURE__ */ jsx("span", { children: "Continuous authority building synchronized with the academic cycle" })] }),
											/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
												className: "point-check",
												children: "✓"
											}), /* @__PURE__ */ jsx("span", { children: "Cinema-grade campus documentaries & student ambassador reels" })] }),
											/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
												className: "point-check",
												children: "✓"
											}), /* @__PURE__ */ jsx("span", { children: "Frictionless, mobile-optimized course discovery and visit booking" })] }),
											/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
												className: "point-check",
												children: "✓"
											}), /* @__PURE__ */ jsx("span", { children: "Empowered faculty thought leadership that parents respect and trust" })] })
										]
									})
								]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "edu-audiences-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "edu-section-header",
							children: /* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 0,
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "edu-section-badge",
										children: "TAILORED EDUCATION SOLUTIONS"
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "edu-section-title",
										children: "A Specialized Strategy for Every Academic Leader"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "edu-section-subtitle",
										children: "Whether you lead an established university campus or build a modern educational brand, we craft solutions attuned to your unique stakeholders."
									})
								]
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "edu-audience-row",
							children: [/* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 100,
								className: "edu-audience-text",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "aud-pill",
										children: [/* @__PURE__ */ jsx(Building2, { size: 15 }), " FOR INSTITUTIONS & UNIVERSITIES"]
									}),
									/* @__PURE__ */ jsx("h3", { children: "Turn Your Campus Culture Into Your Strongest Enrollment Asset" }),
									/* @__PURE__ */ jsx("p", { children: "Prospective students want to picture themselves thriving in your classrooms, labs, and student communities. We capture authentic campus vitality and transform it into high-intent admissions pipelines." }),
									/* @__PURE__ */ jsxs("div", {
										className: "edu-benefit-grid",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "edu-benefit-box",
												children: [/* @__PURE__ */ jsx("strong", { children: "Predictable Influx" }), /* @__PURE__ */ jsx("span", { children: "Sustainable lead volume across every intake session." })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "edu-benefit-box",
												children: [/* @__PURE__ */ jsx("strong", { children: "Campus Life in 4K" }), /* @__PURE__ */ jsx("span", { children: "Reels and shorts reflecting real student experiences." })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "edu-benefit-box",
												children: [/* @__PURE__ */ jsx("strong", { children: "Parent Trust Funnels" }), /* @__PURE__ */ jsx("span", { children: "Dedicated content addressing safety, career outcomes, and ROI." })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "edu-benefit-box",
												children: [/* @__PURE__ */ jsx("strong", { children: "Hyper-Local Dominance" }), /* @__PURE__ */ jsx("span", { children: "Optimized rankings for regional searches and program queries." })]
											})
										]
									}),
									/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "edu-btn-primary",
										style: {
											padding: "12px 26px",
											fontSize: "0.95rem"
										},
										children: [/* @__PURE__ */ jsx("span", { children: "Partner for Institutional Growth" }), /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
									})
								]
							}), /* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								className: "edu-audience-media",
								children: /* @__PURE__ */ jsxs("div", {
									className: "edu-audience-img-wrapper",
									children: [/* @__PURE__ */ jsx("img", {
										src: "/institute_image.png",
										alt: "University Campus Students and Life",
										className: "edu-audience-img"
									}), /* @__PURE__ */ jsxs("div", {
										className: "edu-img-overlay-caption",
										children: [/* @__PURE__ */ jsx("span", { children: "🏛️ Campus Tour & Community Showcase" }), /* @__PURE__ */ jsx("span", { children: "94% Attendance Rate" })]
									})]
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "edu-audience-row reverse",
							children: [/* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 100,
								className: "edu-audience-text",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "aud-pill",
										children: [/* @__PURE__ */ jsx(UserCheck, { size: 15 }), " FOR EDUCATORS, PROFESSORS & EXPERTS"]
									}),
									/* @__PURE__ */ jsx("h3", { children: "Elevate Your Intellectual Capital Into Recognized Digital Leadership" }),
									/* @__PURE__ */ jsx("p", { children: "Great educators deserve a stage beyond the lecture hall. We help faculty members, authors, and EdTech founders translate deep expertise into engaged global followings, published authority, and high-demand executive programs." }),
									/* @__PURE__ */ jsxs("div", {
										className: "edu-benefit-grid",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "edu-benefit-box",
												children: [/* @__PURE__ */ jsx("strong", { children: "Thought Leadership" }), /* @__PURE__ */ jsx("span", { children: "Authoritative long-form analysis, articles, and whitepapers." })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "edu-benefit-box",
												children: [/* @__PURE__ */ jsx("strong", { children: "Global Masterclasses" }), /* @__PURE__ */ jsx("span", { children: "High-production studio lectures that attract international learners." })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "edu-benefit-box",
												children: [/* @__PURE__ */ jsx("strong", { children: "Media-Ready Persona" }), /* @__PURE__ */ jsx("span", { children: "Optimized video reels and LinkedIn positioning for keynote speaking." })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "edu-benefit-box",
												children: [/* @__PURE__ */ jsx("strong", { children: "Community Trust" }), /* @__PURE__ */ jsx("span", { children: "Direct learner loyalty and continuous mentorship engagement." })]
											})
										]
									}),
									/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "edu-btn-primary",
										style: {
											padding: "12px 26px",
											fontSize: "0.95rem"
										},
										children: [/* @__PURE__ */ jsx("span", { children: "Build Your Personal Brand" }), /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
									})
								]
							}), /* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								className: "edu-audience-media",
								children: /* @__PURE__ */ jsxs("div", {
									className: "edu-audience-img-wrapper",
									children: [/* @__PURE__ */ jsx("img", {
										src: "/edu_expert.png",
										alt: "Educator and Professor Thought Leadership",
										className: "edu-audience-img"
									}), /* @__PURE__ */ jsxs("div", {
										className: "edu-img-overlay-caption",
										children: [/* @__PURE__ */ jsx("span", { children: "🎙️ Global Classroom & Executive Impact" }), /* @__PURE__ */ jsx("span", { children: "Direct Learner Inbound" })]
									})]
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "edu-approach-section",
				id: "approach",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("div", {
						className: "edu-section-header",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 0,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "edu-section-badge",
									children: "OUR SYSTEMATIC METHODOLOGY"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "edu-section-title",
									children: "The Three-Pillar S-Bloom Education Framework"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "edu-section-subtitle",
									children: "A connected approach engineered specifically around academic decision psychology and intake cycles."
								})
							]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "edu-approach-cards-grid",
						children: [
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 100,
								children: /* @__PURE__ */ jsxs("div", {
									className: "edu-approach-card-v2",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "edu-card-step-badge",
											children: "01"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "edu-card-phase",
											children: "FOUNDATION & PLATFORMS"
										}),
										/* @__PURE__ */ jsx("h3", { children: "BUILD: The Digital Campus" }),
										/* @__PURE__ */ jsx("p", { children: "We engineer frictionless program discovery, virtual campus pathways, and seamless application portals that convert curious visitors into enrolled students." }),
										/* @__PURE__ */ jsxs("ul", {
											className: "edu-deliverables-list",
											children: [
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Intuitive program architecture & prerequisites" })] }),
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Mobile-first application & tour booking forms" })] }),
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Academic SEO and local map ranking dominance" })] }),
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Frictionless parent and student user experience" })] })
											]
										})
									]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								children: /* @__PURE__ */ jsxs("div", {
									className: "edu-approach-card-v2",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "edu-card-step-badge",
											children: "02"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "edu-card-phase",
											children: "CONTENT & AUTHORITY"
										}),
										/* @__PURE__ */ jsx("h3", { children: "CREATE: Cinema-Grade Stories" }),
										/* @__PURE__ */ jsx("p", { children: "We capture the pulse of your institution with cinema-grade cameras, producing authentic student-life reels, faculty spotlights, and alumni proof." }),
										/* @__PURE__ */ jsxs("ul", {
											className: "edu-deliverables-list",
											children: [
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Dynamic student life reels and Day-in-the-Life shorts" })] }),
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Faculty research showcases & Dean interviews" })] }),
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Inspiring alumni career milestone documentaries" })] }),
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Lab, library, and campus facility highlights" })] })
											]
										})
									]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 300,
								children: /* @__PURE__ */ jsxs("div", {
									className: "edu-approach-card-v2",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "edu-card-step-badge",
											children: "03"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "edu-card-phase",
											children: "REACH & CONVERSION"
										}),
										/* @__PURE__ */ jsx("h3", { children: "PROMOTE: Timed Campaigns" }),
										/* @__PURE__ */ jsx("p", { children: "We deploy hyper-targeted Meta Ads and search campaigns synchronized precisely with key admission deadlines and open house schedules." }),
										/* @__PURE__ */ jsxs("ul", {
											className: "edu-deliverables-list",
											children: [
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Targeting synchronized with academic intake calendars" })] }),
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Segmented parent vs. student messaging workflows" })] }),
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "High-attendance virtual webinars & open-day drives" })] }),
												/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Retargeting to assist undecided applicant families" })] })
											]
										})
									]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "edu-roadmap-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("div", {
						className: "edu-section-header",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 0,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "edu-section-badge",
									children: "LIFECYCLE PARTNERSHIP"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "edu-section-title",
									children: "Harmonized with Your Admissions Calendar"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "edu-section-subtitle",
									children: "Education marketing requires precision timing. We align our initiatives with your academic deadlines throughout the entire annual cycle."
								})
							]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "edu-timeline-grid",
						children: [
							/* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 50,
								className: "edu-timeline-step",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "edu-quarter-pill",
										children: "PHASE 1 · PRE-CYCLE"
									}),
									/* @__PURE__ */ jsx("h4", { children: "Authority & Awareness" }),
									/* @__PURE__ */ jsx("p", { children: "Establish institutional prestige through faculty spotlights, campus storytelling, and research achievements before admissions open." })
								]
							}),
							/* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 100,
								className: "edu-timeline-step",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "edu-quarter-pill",
										children: "PHASE 2 · OPEN ADMISSIONS"
									}),
									/* @__PURE__ */ jsx("h4", { children: "Inquiry Generation" }),
									/* @__PURE__ */ jsx("p", { children: "Deploy high-intent search and social campaigns to drive prospectus downloads, campus tours, and open house registrations." })
								]
							}),
							/* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 150,
								className: "edu-timeline-step",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "edu-quarter-pill",
										children: "PHASE 3 · DEADLINE ACCELERATION"
									}),
									/* @__PURE__ */ jsx("h4", { children: "Application Conversion" }),
									/* @__PURE__ */ jsx("p", { children: "Targeted counseling nurture sequences, parent reassurance webinars, and scholarship guidance to maximize completed submissions." })
								]
							}),
							/* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 200,
								className: "edu-timeline-step",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "edu-quarter-pill",
										children: "PHASE 4 · POST-CYCLE"
									}),
									/* @__PURE__ */ jsx("h4", { children: "Advocacy & Onboarding" }),
									/* @__PURE__ */ jsx("p", { children: "Celebrate accepted cohorts, activate alumni advocacy networks, and prepare organic momentum for the next enrollment intake." })
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "edu-final-cta-section",
				children: [/* @__PURE__ */ jsx("div", {
					className: "edu-cta-ambient",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsx("div", {
						className: "edu-cta-inner",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 0,
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "edu-cta-badge",
									children: [/* @__PURE__ */ jsx(Sparkles, { size: 16 }), " TAKE THE NEXT STEP"]
								}),
								/* @__PURE__ */ jsxs("h2", {
									className: "edu-cta-title",
									children: [
										"Your Institution Inspires Minds. ",
										/* @__PURE__ */ jsx("br", {}),
										"Let’s Help More Students Discover It."
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "edu-cta-desc",
									children: "Book a 30-minute strategic education consultation with S-Bloom. We will evaluate your current enrollment funnel and present a customized digital authority blueprint tailored to your upcoming intake."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "edu-cta-buttons",
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "edu-cta-primary-btn",
										children: [/* @__PURE__ */ jsx("span", { children: "Schedule Strategy Consultation" }), /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "edu-cta-perks",
									children: [
										/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(ShieldCheck, {
											size: 16,
											color: "#D9A52E"
										}), " Complimentary 30-min intake diagnostic"] }),
										/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(Calendar, {
											size: 16,
											color: "#D9A52E"
										}), " Aligned to your academic calendar"] }),
										/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(Award, {
											size: 16,
											color: "#D9A52E"
										}), " 100% compliant with educational standards"] })
									]
								})
							]
						})
					})
				})]
			})
		]
	});
};
//#endregion
//#region src/routes/education.tsx
var education_exports = /* @__PURE__ */ __exportAll({
	default: () => education_default,
	meta: () => meta$10
});
var meta$10 = () => {
	return [
		{ title: "Education Industry Digital Growth | sBLOOM" },
		{
			name: "description",
			content: "Digital growth solutions for schools, colleges, and education brands."
		},
		{
			property: "og:title",
			content: "Education Industry Digital Growth | sBLOOM"
		},
		{
			property: "og:description",
			content: "Digital growth solutions for schools, colleges, and education brands."
		}
	];
};
var education_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(EducationPage, {});
});
//#endregion
//#region src/pages/industries/HealthcarePage.tsx
var HealthcarePage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "page health-page-wrapper",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "ind-hero health-hero-visual",
				children: /* @__PURE__ */ jsx("div", {
					className: "container text-center",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "ind-hero-label",
								children: "SBLOOM — HEALTHCARE"
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "ind-hero-title mx-auto",
								children: "Digital growth for healthcare."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "ind-hero-desc mx-auto",
								children: "We help expertise-led hospitals, clinics, doctors, and wellness brands close the gap between their clinical excellence and what patients understand about them."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "ind-journey health-journey",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 100,
						children: /* @__PURE__ */ jsxs("div", {
							className: "health-trust-badge-layout",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "health-badge-icon",
									children: "⚕"
								}),
								/* @__PURE__ */ jsx("h2", { children: "Healthcare decisions are built on trust and urgency." }),
								/* @__PURE__ */ jsx("p", { children: "When patients seek medical care, they are often anxious or in urgent need. They evaluate your organization based on the qualifications of your doctors, clear explanations of treatments, and the perceived safety of your facilities. Our marketing approach respects this journey by prioritizing trust, empathy, and easy access to information." })
							]
						})
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "ind-challenge health-challenge",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "health-challenge-grid",
						children: [/* @__PURE__ */ jsx(ScrollReveal, {
							delay: 100,
							children: /* @__PURE__ */ jsx("h2", { children: "Balancing clinical authority with approachability." })
						}), /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 200,
							children: /* @__PURE__ */ jsx("p", { children: "Healthcare organizations face strict compliance regulations and the challenge of managing local reputation. Flashy, transactional ads can damage a clinic's credibility. We ensure your digital presence is professional, compliant, and highly visible to those actively seeking care." })
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "ind-approach health-approach",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx(ScrollReveal, {
						delay: 0,
						children: /* @__PURE__ */ jsx("div", {
							className: "ind-approach-header",
							children: /* @__PURE__ */ jsx("h2", { children: "Our Approach applied to Healthcare" })
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "health-approach-list",
						children: [
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 100,
								children: /* @__PURE__ */ jsxs("div", {
									className: "health-approach-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "health-approach-label",
										children: "BUILD"
									}), /* @__PURE__ */ jsx("div", {
										className: "health-approach-text",
										children: "We focus heavily on hyper-local SEO and Google Business Profile optimization so patients find you exactly when they search for care \"near me.\""
									})]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								children: /* @__PURE__ */ jsxs("div", {
									className: "health-approach-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "health-approach-label",
										children: "CREATE"
									}), /* @__PURE__ */ jsx("div", {
										className: "health-approach-text",
										children: "We develop patient education content and physician Q&As that build clinical authority while remaining empathetic and easy to understand."
									})]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 300,
								children: /* @__PURE__ */ jsxs("div", {
									className: "health-approach-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "health-approach-label",
										children: "PROMOTE"
									}), /* @__PURE__ */ jsx("div", {
										className: "health-approach-text",
										children: "We deploy high-intent Google Search Ads capturing patients actively seeking specific treatments or urgent care."
									})]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "final-cta",
				children: /* @__PURE__ */ jsx("div", {
					className: "container text-center",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [/* @__PURE__ */ jsx("h2", { children: "Ready to grow your digital presence?" }), /* @__PURE__ */ jsx("div", {
							className: "hero-buttons",
							style: {
								marginTop: "40px",
								justifyContent: "center"
							},
							children: /* @__PURE__ */ jsx(Link$1, {
								to: "/contact",
								className: "btn btn-primary",
								children: "Request a Healthcare Strategy Consultation"
							})
						})]
					})
				})
			})
		]
	});
};
//#endregion
//#region src/routes/healthcare.tsx
var healthcare_exports = /* @__PURE__ */ __exportAll({
	default: () => healthcare_default,
	meta: () => meta$9
});
var meta$9 = () => {
	return [
		{ title: "Healthcare Digital Growth | sBLOOM" },
		{
			name: "description",
			content: "Build trust and visibility for hospitals, clinics, and healthcare brands."
		},
		{
			property: "og:title",
			content: "Healthcare Digital Growth | sBLOOM"
		},
		{
			property: "og:description",
			content: "Build trust and visibility for hospitals, clinics, and healthcare brands."
		}
	];
};
var healthcare_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(HealthcarePage, {});
});
//#endregion
//#region src/pages/industries/ProfessionalServicesPage.tsx
var ConsultingProfessionalServicesPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "page ps-page-wrapper",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "ind-hero ps-hero-visual",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 0,
						children: /* @__PURE__ */ jsxs("div", {
							className: "ps-editorial-header",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "ind-hero-label",
									children: "SBLOOM — PROFESSIONAL SERVICES"
								}),
								/* @__PURE__ */ jsx("h1", {
									className: "ind-hero-title",
									children: "Digital growth for consulting and professional services."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "ind-hero-desc",
									children: "We help IT consultancies, independent experts, and professional firms close the gap between their complex expertise and what their B2B clients actually understand."
								})
							]
						})
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "ind-journey ps-journey",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "ps-editorial-columns",
						children: [/* @__PURE__ */ jsx(ScrollReveal, {
							delay: 100,
							className: "ps-col",
							children: /* @__PURE__ */ jsx("h2", { children: "B2B decisions focus on risk mitigation and authority." })
						}), /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 200,
							className: "ps-col",
							children: /* @__PURE__ */ jsx("p", { children: "Corporate clients and procurement teams do not make impulse purchases. They evaluate your firm based on proven methodologies, deep industry understanding, and past success. Whether you are an independent consultant or a large IT firm, our approach focuses on proving your capability before the first conversation even happens." })
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "ind-challenge ps-challenge",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsx("div", {
						className: "ps-editorial-box",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 100,
							children: [/* @__PURE__ */ jsx("h2", { children: "Making invisible expertise visible." }), /* @__PURE__ */ jsx("p", { children: "The biggest challenge for professional services is differentiation. Jargon-heavy websites and generic B2B marketing obscure your true value. You don't just need local visibility; you need to establish thought leadership and build authority in a crowded, competitive market." })]
						})
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "ind-approach ps-approach",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx(ScrollReveal, {
						delay: 0,
						children: /* @__PURE__ */ jsx("div", {
							className: "ind-approach-header border-top",
							children: /* @__PURE__ */ jsx("h2", { children: "Our Approach applied to Professional Services" })
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "ps-approach-grid ind-approach-grid",
						children: [
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 100,
								children: /* @__PURE__ */ jsxs("div", {
									className: "ps-approach-card ind-approach-card",
									children: [/* @__PURE__ */ jsx("h3", { children: "BUILD" }), /* @__PURE__ */ jsx("p", { children: "We develop a technical SEO architecture centered around the complex business problems your firm solves." })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								children: /* @__PURE__ */ jsxs("div", {
									className: "ps-approach-card ind-approach-card",
									children: [/* @__PURE__ */ jsx("h3", { children: "CREATE" }), /* @__PURE__ */ jsx("p", { children: "We produce authoritative digital content, including long-form articles and optimized LinkedIn posts, that showcase your methodology." })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 300,
								children: /* @__PURE__ */ jsxs("div", {
									className: "ps-approach-card ind-approach-card",
									children: [/* @__PURE__ */ jsx("h3", { children: "PROMOTE" }), /* @__PURE__ */ jsx("p", { children: "We utilize targeted LinkedIn B2B advertising and Account-Based Marketing (ABM) strategies to reach specific decision-makers." })]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "final-cta",
				children: /* @__PURE__ */ jsx("div", {
					className: "container text-center",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [/* @__PURE__ */ jsx("h2", { children: "Ready to grow your digital presence?" }), /* @__PURE__ */ jsx("div", {
							className: "hero-buttons",
							style: {
								marginTop: "40px",
								justifyContent: "center"
							},
							children: /* @__PURE__ */ jsx(Link$1, {
								to: "/contact",
								className: "btn btn-primary",
								children: "Request a Professional Services Strategy Consultation"
							})
						})]
					})
				})
			})
		]
	});
};
//#endregion
//#region src/routes/professional-services.tsx
var professional_services_exports = /* @__PURE__ */ __exportAll({
	default: () => professional_services_default,
	meta: () => meta$8
});
var meta$8 = () => {
	return [
		{ title: "Consulting & IT Digital Growth | sBLOOM" },
		{
			name: "description",
			content: "Digital presence for consulting and professional services."
		},
		{
			property: "og:title",
			content: "Consulting & IT Digital Growth | sBLOOM"
		},
		{
			property: "og:description",
			content: "Digital presence for consulting and professional services."
		}
	];
};
var professional_services_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(ConsultingProfessionalServicesPage, {});
});
//#endregion
//#region src/pages/solutions/SolutionsOverviewPage.tsx
var SolutionsOverviewPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "page sol-overview-wrapper",
		children: [/* @__PURE__ */ jsx("section", {
			className: "sol-hero",
			children: /* @__PURE__ */ jsx("div", {
				className: "container text-center",
				children: /* @__PURE__ */ jsxs(ScrollReveal, {
					delay: 0,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "sol-hero-label",
							children: "SOLUTIONS OVERVIEW"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "sol-hero-title mx-auto",
							children: "A coordinated approach to digital growth."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "sol-hero-desc mx-auto",
							children: "We do not believe in one-size-fits-all digital marketing packages. Following a thorough diagnosis of your organization's communication gaps, we apply the exact combination of foundational building, content creation, and targeted promotion required to achieve your objectives."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "hero-buttons",
							style: {
								marginTop: "40px",
								justifyContent: "center"
							},
							children: /* @__PURE__ */ jsx(Link$1, {
								to: "/how-it-works",
								className: "btn btn-primary",
								children: "Learn How We Work"
							})
						})
					]
				})
			})
		}), /* @__PURE__ */ jsx("section", {
			className: "sol-pillars-grid",
			children: /* @__PURE__ */ jsx("div", {
				className: "container",
				children: /* @__PURE__ */ jsxs("div", {
					className: "sol-pillars-container",
					children: [
						/* @__PURE__ */ jsx(ScrollReveal, {
							delay: 100,
							children: /* @__PURE__ */ jsxs("div", {
								className: "sol-pillar-card",
								children: [
									/* @__PURE__ */ jsx("h2", { children: "BUILD" }),
									/* @__PURE__ */ jsx("p", { children: "Make your expertise discoverable. We build the digital infrastructure required to make your organization easy to find, navigate, and engage with." }),
									/* @__PURE__ */ jsx(Link$1, {
										to: "/solutions/build",
										className: "sol-pillar-link",
										children: "Explore Build →"
									})
								]
							})
						}),
						/* @__PURE__ */ jsx(ScrollReveal, {
							delay: 200,
							children: /* @__PURE__ */ jsxs("div", {
								className: "sol-pillar-card",
								children: [
									/* @__PURE__ */ jsx("h2", { children: "CREATE" }),
									/* @__PURE__ */ jsx("p", { children: "Help audiences understand and trust your organization. We produce the materials required to explain your true value and approach." }),
									/* @__PURE__ */ jsx(Link$1, {
										to: "/solutions/create",
										className: "sol-pillar-link",
										children: "Explore Create →"
									})
								]
							})
						}),
						/* @__PURE__ */ jsx(ScrollReveal, {
							delay: 300,
							children: /* @__PURE__ */ jsxs("div", {
								className: "sol-pillar-card",
								children: [
									/* @__PURE__ */ jsx("h2", { children: "PROMOTE" }),
									/* @__PURE__ */ jsx("p", { children: "Reach relevant audiences. We amplify your presence, putting your organization directly in front of the decision-makers that matter most." }),
									/* @__PURE__ */ jsx(Link$1, {
										to: "/solutions/promote",
										className: "sol-pillar-link",
										children: "Explore Promote →"
									})
								]
							})
						})
					]
				})
			})
		})]
	});
};
//#endregion
//#region src/routes/solutions.tsx
var solutions_exports = /* @__PURE__ */ __exportAll({
	default: () => solutions_default,
	meta: () => meta$7
});
var meta$7 = () => {
	return [
		{ title: "Our Solutions | sBLOOM" },
		{
			name: "description",
			content: "Discover how we help organizations build, create, and promote."
		},
		{
			property: "og:title",
			content: "Our Solutions | sBLOOM"
		},
		{
			property: "og:description",
			content: "Discover how we help organizations build, create, and promote."
		}
	];
};
var solutions_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(SolutionsOverviewPage, {});
});
//#endregion
//#region src/pages/solutions/BuildPage.tsx
var BuildPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "page sol-detail-wrapper",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "sol-hero",
				children: /* @__PURE__ */ jsx("div", {
					className: "container text-center",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "sol-hero-label",
								children: "S-BLOOM SYSTEM — 01"
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "sol-hero-title mx-auto",
								children: "Make expertise discoverable."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "sol-hero-desc mx-auto",
								children: "Your expertise cannot serve its purpose if the right audience cannot find it. The BUILD phase focuses on creating the digital infrastructure required to make your organization discoverable, accessible, and easy to navigate."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "sol-activities",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "sol-activities-list",
						children: [
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 100,
								children: /* @__PURE__ */ jsxs("div", {
									className: "sol-activity-item",
									children: [/* @__PURE__ */ jsx("h3", { children: "Website Design & Development" }), /* @__PURE__ */ jsx("p", { children: "Creating intuitive, fast, and professionally designed platforms that act as your primary digital storefront." })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								children: /* @__PURE__ */ jsxs("div", {
									className: "sol-activity-item",
									children: [/* @__PURE__ */ jsx("h3", { children: "SEO & Search Visibility" }), /* @__PURE__ */ jsx("p", { children: "Ensuring your website ranks for the specific queries your audience is searching for." })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 300,
								children: /* @__PURE__ */ jsxs("div", {
									className: "sol-activity-item",
									children: [/* @__PURE__ */ jsx("h3", { children: "Google Business Profile" }), /* @__PURE__ */ jsx("p", { children: "Optimizing your local footprint—crucial for healthcare clinics and regional institutions." })]
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "final-cta",
				children: /* @__PURE__ */ jsx("div", {
					className: "container text-center",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [/* @__PURE__ */ jsx("h2", { children: "Ready to grow your digital presence?" }), /* @__PURE__ */ jsxs("div", {
							className: "hero-buttons",
							style: {
								marginTop: "40px",
								justifyContent: "center"
							},
							children: [/* @__PURE__ */ jsx(Link$1, {
								to: "/contact",
								className: "btn btn-primary",
								children: "Get Started"
							}), /* @__PURE__ */ jsx(Link$1, {
								to: "/solutions",
								className: "btn btn-secondary",
								style: { marginLeft: "16px" },
								children: "Back to Solutions"
							})]
						})]
					})
				})
			})
		]
	});
};
//#endregion
//#region src/routes/build.tsx
var build_exports = /* @__PURE__ */ __exportAll({
	default: () => build_default,
	meta: () => meta$6
});
var meta$6 = () => {
	return [
		{ title: "Build Your Digital Foundation | sBLOOM" },
		{
			name: "description",
			content: "Website design, SEO, and discoverability solutions."
		},
		{
			property: "og:title",
			content: "Build Your Digital Foundation | sBLOOM"
		},
		{
			property: "og:description",
			content: "Website design, SEO, and discoverability solutions."
		}
	];
};
var build_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(BuildPage, {});
});
//#endregion
//#region src/pages/solutions/CreatePage.tsx
var CreatePage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "page sol-detail-wrapper",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "sol-hero",
				children: /* @__PURE__ */ jsx("div", {
					className: "container text-center",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "sol-hero-label",
								children: "S-BLOOM SYSTEM — 02"
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "sol-hero-title mx-auto",
								children: "Help audiences understand."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "sol-hero-desc mx-auto",
								children: "Trust is built when audiences understand your true value. The CREATE phase focuses on producing the materials required to explain your expertise, showcase your culture, and keep your audience engaged through the decision journey."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "sol-activities",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "sol-activities-list",
						children: [
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 100,
								children: /* @__PURE__ */ jsxs("div", {
									className: "sol-activity-item",
									children: [/* @__PURE__ */ jsx("h3", { children: "Social Media Management" }), /* @__PURE__ */ jsx("p", { children: "Maintaining a consistent, professional presence across relevant platforms." })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								children: /* @__PURE__ */ jsxs("div", {
									className: "sol-activity-item",
									children: [/* @__PURE__ */ jsx("h3", { children: "Social Media Posts & Digital Content" }), /* @__PURE__ */ jsx("p", { children: "Developing articles, thought leadership, and infographics that explain your value." })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 300,
								children: /* @__PURE__ */ jsxs("div", {
									className: "sol-activity-item",
									children: [/* @__PURE__ */ jsx("h3", { children: "Reels and Videos" }), /* @__PURE__ */ jsx("p", { children: "Producing authentic, high-quality video content (e.g., campus tours, physician Q&As, expert insights) that humanize your organization." })]
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "final-cta",
				children: /* @__PURE__ */ jsx("div", {
					className: "container text-center",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [/* @__PURE__ */ jsx("h2", { children: "Ready to grow your digital presence?" }), /* @__PURE__ */ jsxs("div", {
							className: "hero-buttons",
							style: {
								marginTop: "40px",
								justifyContent: "center"
							},
							children: [/* @__PURE__ */ jsx(Link$1, {
								to: "/contact",
								className: "btn btn-primary",
								children: "Get Started"
							}), /* @__PURE__ */ jsx(Link$1, {
								to: "/solutions",
								className: "btn btn-secondary",
								style: { marginLeft: "16px" },
								children: "Back to Solutions"
							})]
						})]
					})
				})
			})
		]
	});
};
//#endregion
//#region src/routes/create.tsx
var create_exports = /* @__PURE__ */ __exportAll({
	default: () => create_default,
	meta: () => meta$5
});
var meta$5 = () => {
	return [
		{ title: "Create Content & Assets | sBLOOM" },
		{
			name: "description",
			content: "Social media, video production, and content creation."
		},
		{
			property: "og:title",
			content: "Create Content & Assets | sBLOOM"
		},
		{
			property: "og:description",
			content: "Social media, video production, and content creation."
		}
	];
};
var create_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(CreatePage, {});
});
//#endregion
//#region src/pages/solutions/PromotePage.tsx
var PromotePage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "page sol-detail-wrapper",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "sol-hero",
				children: /* @__PURE__ */ jsx("div", {
					className: "container text-center",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "sol-hero-label",
								children: "S-BLOOM SYSTEM — 03"
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "sol-hero-title mx-auto",
								children: "Reach relevant audiences."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "sol-hero-desc mx-auto",
								children: "Once your foundation is strong and your expertise is clear, the PROMOTE phase amplifies your presence, putting your organization directly in front of the audiences that matter most to accelerate discovery."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "sol-activities",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "sol-activities-list",
						children: [
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 100,
								children: /* @__PURE__ */ jsxs("div", {
									className: "sol-activity-item",
									children: [/* @__PURE__ */ jsx("h3", { children: "Meta Ads" }), /* @__PURE__ */ jsx("p", { children: "Targeted campaigns on Facebook and Instagram, ideal for demographic targeting in Education." })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								children: /* @__PURE__ */ jsxs("div", {
									className: "sol-activity-item",
									children: [/* @__PURE__ */ jsx("h3", { children: "Google Ads" }), /* @__PURE__ */ jsx("p", { children: "High-intent search campaigns, crucial for capturing urgent Healthcare needs." })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 300,
								children: /* @__PURE__ */ jsxs("div", {
									className: "sol-activity-item",
									children: [/* @__PURE__ */ jsx("h3", { children: "Performance Marketing & Campaign Management" }), /* @__PURE__ */ jsx("p", { children: "End-to-end management of your advertising spend to ensure measurable progress." })]
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "final-cta",
				children: /* @__PURE__ */ jsx("div", {
					className: "container text-center",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [/* @__PURE__ */ jsx("h2", { children: "Ready to grow your digital presence?" }), /* @__PURE__ */ jsxs("div", {
							className: "hero-buttons",
							style: {
								marginTop: "40px",
								justifyContent: "center"
							},
							children: [/* @__PURE__ */ jsx(Link$1, {
								to: "/contact",
								className: "btn btn-primary",
								children: "Get Started"
							}), /* @__PURE__ */ jsx(Link$1, {
								to: "/solutions",
								className: "btn btn-secondary",
								style: { marginLeft: "16px" },
								children: "Back to Solutions"
							})]
						})]
					})
				})
			})
		]
	});
};
//#endregion
//#region src/routes/promote.tsx
var promote_exports = /* @__PURE__ */ __exportAll({
	default: () => promote_default,
	meta: () => meta$4
});
var meta$4 = () => {
	return [
		{ title: "Promote to the Right Audience | sBLOOM" },
		{
			name: "description",
			content: "Campaigns, ads, and performance marketing."
		},
		{
			property: "og:title",
			content: "Promote to the Right Audience | sBLOOM"
		},
		{
			property: "og:description",
			content: "Campaigns, ads, and performance marketing."
		}
	];
};
var promote_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(PromotePage, {});
});
//#endregion
//#region src/pages/AboutPage.tsx
var AboutPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "page phase5-wrapper",
		children: [/* @__PURE__ */ jsx("section", {
			className: "phase5-hero",
			children: /* @__PURE__ */ jsx("div", {
				className: "container text-center",
				children: /* @__PURE__ */ jsxs(ScrollReveal, {
					delay: 0,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "phase5-hero-label",
							children: "ABOUT S-BLOOM"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "phase5-hero-title mx-auto",
							children: "Closing the gap between expertise and understanding."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "phase5-hero-desc mx-auto",
							children: "S-Bloom was built to solve a specific problem: Expertise-led organizations—whether in healthcare, education, or professional consulting—do exceptional work, but often struggle to communicate their true value to the people who need them most."
						})
					]
				})
			})
		}), /* @__PURE__ */ jsx("section", {
			className: "phase5-content",
			children: /* @__PURE__ */ jsx("div", {
				className: "container",
				children: /* @__PURE__ */ jsxs("div", {
					className: "phase5-grid",
					children: [/* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 100,
						className: "phase5-card",
						children: [/* @__PURE__ */ jsx("h2", { children: "Our Strategy-Led Approach" }), /* @__PURE__ */ jsx("p", { children: "We believe that high-stakes decisions require a different marketing approach. Generic digital packages and superficial metrics don't build trust for expertise-led services. Instead, we advocate for audience-centric marketing. We study how your patients, students, or B2B clients actually discover, evaluate, and choose a provider, and we build your digital strategy around that journey." })]
					}), /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 200,
						className: "phase5-card",
						children: [/* @__PURE__ */ jsx("h2", { children: "Our Model" }), /* @__PURE__ */ jsx("p", { children: "By utilizing a core strategic team alongside a curated network of specialized creative partners, we ensure that every client receives high-level strategy backed by expert execution." })]
					})]
				})
			})
		})]
	});
};
//#endregion
//#region src/routes/about.tsx
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => about_default,
	meta: () => meta$3
});
var meta$3 = () => {
	return [
		{ title: "About sBLOOM | Our Story" },
		{
			name: "description",
			content: "Learn about sBLOOM, our methodology, and our team."
		},
		{
			property: "og:title",
			content: "About sBLOOM | Our Story"
		},
		{
			property: "og:description",
			content: "Learn about sBLOOM, our methodology, and our team."
		}
	];
};
var about_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(AboutPage, {});
});
//#endregion
//#region src/pages/HowItWorksPage.tsx
var HowItWorksPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "page phase5-wrapper",
		children: [/* @__PURE__ */ jsx("section", {
			className: "phase5-hero",
			children: /* @__PURE__ */ jsx("div", {
				className: "container text-center",
				children: /* @__PURE__ */ jsxs(ScrollReveal, {
					delay: 0,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "phase5-hero-label",
							children: "HOW IT WORKS"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "phase5-hero-title mx-auto",
							children: "Strategy first. Execution second."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "phase5-hero-desc mx-auto",
							children: "We approach every new client engagement systematically. BUILD, CREATE, and PROMOTE are selected according to the diagnosed needs."
						})
					]
				})
			})
		}), /* @__PURE__ */ jsx("section", {
			className: "phase5-content",
			children: /* @__PURE__ */ jsx("div", {
				className: "container",
				children: /* @__PURE__ */ jsxs("div", {
					className: "hiw-process phase5-process",
					children: [
						/* @__PURE__ */ jsx("div", { className: "hiw-line-bg" }),
						/* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 100,
							className: "hiw-step",
							children: [
								/* @__PURE__ */ jsx("div", { className: "hiw-indicator" }),
								/* @__PURE__ */ jsx("div", { className: "hiw-step-line" }),
								/* @__PURE__ */ jsx("div", {
									className: "hiw-step-num",
									children: "01"
								}),
								/* @__PURE__ */ jsx("h3", { children: "UNDERSTAND" }),
								/* @__PURE__ */ jsx("p", { children: "We begin by thoroughly understanding your organization, the services you provide, your business goals, your target audiences, and your current digital footprint." })
							]
						}),
						/* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 200,
							className: "hiw-step",
							children: [
								/* @__PURE__ */ jsx("div", { className: "hiw-indicator" }),
								/* @__PURE__ */ jsx("div", { className: "hiw-step-line" }),
								/* @__PURE__ */ jsx("div", {
									className: "hiw-step-num",
									children: "02"
								}),
								/* @__PURE__ */ jsx("h3", { children: "DIAGNOSE" }),
								/* @__PURE__ */ jsx("p", { children: "We identify the specific communication and visibility gaps preventing your intended audience from discovering, understanding, or evaluating your services." })
							]
						}),
						/* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 300,
							className: "hiw-step",
							children: [
								/* @__PURE__ */ jsx("div", { className: "hiw-indicator" }),
								/* @__PURE__ */ jsx("div", { className: "hiw-step-line" }),
								/* @__PURE__ */ jsx("div", {
									className: "hiw-step-num",
									children: "03"
								}),
								/* @__PURE__ */ jsx("h3", { children: "STRATEGIZE" }),
								/* @__PURE__ */ jsx("p", { children: "We define clear priorities, audience-specific messaging, the appropriate marketing channels, and measurable objectives." })
							]
						}),
						/* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 400,
							className: "hiw-step",
							children: [
								/* @__PURE__ */ jsx("div", { className: "hiw-indicator" }),
								/* @__PURE__ */ jsx("div", { className: "hiw-step-line" }),
								/* @__PURE__ */ jsx("div", {
									className: "hiw-step-num",
									children: "04"
								}),
								/* @__PURE__ */ jsx("h3", { children: "EXECUTE" }),
								/* @__PURE__ */ jsx("p", { children: "We deploy the precise mix of BUILD, CREATE, and PROMOTE activities required to address the diagnosed gaps." })
							]
						}),
						/* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 500,
							className: "hiw-step",
							children: [
								/* @__PURE__ */ jsx("div", { className: "hiw-indicator" }),
								/* @__PURE__ */ jsx("div", {
									className: "hiw-step-num",
									children: "05"
								}),
								/* @__PURE__ */ jsx("h3", { children: "MEASURE AND IMPROVE" }),
								/* @__PURE__ */ jsx("p", { children: "We continuously review relevant performance indicators, identify what is working, and recommend appropriate improvements to support long-term growth." })
							]
						})
					]
				})
			})
		})]
	});
};
//#endregion
//#region src/routes/how-it-works.tsx
var how_it_works_exports = /* @__PURE__ */ __exportAll({
	default: () => how_it_works_default,
	meta: () => meta$2
});
var meta$2 = () => {
	return [
		{ title: "How It Works | sBLOOM Methodology" },
		{
			name: "description",
			content: "Our diagnose-first approach to digital growth."
		},
		{
			property: "og:title",
			content: "How It Works | sBLOOM Methodology"
		},
		{
			property: "og:description",
			content: "Our diagnose-first approach to digital growth."
		}
	];
};
var how_it_works_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(HowItWorksPage, {});
});
//#endregion
//#region src/components/CreativeOrbit.tsx
var CreativeOrbit = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "co-wrapper",
		children: [
			/* @__PURE__ */ jsx("div", { className: "co-radial-glow" }),
			/* @__PURE__ */ jsxs("div", {
				className: "co-outer-ring",
				children: [/* @__PURE__ */ jsx("div", {
					className: "co-node co-node-top",
					children: /* @__PURE__ */ jsxs("div", {
						className: "co-node-content co-counter-cw-slow",
						children: [/* @__PURE__ */ jsx("div", {
							className: "co-icon-box",
							children: /* @__PURE__ */ jsx(PenTool, { size: 20 })
						}), /* @__PURE__ */ jsx("span", {
							className: "co-label",
							children: "DESIGN"
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "co-node co-node-bottom",
					children: /* @__PURE__ */ jsxs("div", {
						className: "co-node-content co-counter-cw-slow",
						children: [/* @__PURE__ */ jsx("div", {
							className: "co-icon-box",
							children: /* @__PURE__ */ jsx(Film, { size: 20 })
						}), /* @__PURE__ */ jsx("span", {
							className: "co-label",
							children: "VIDEO"
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "co-inner-ring",
				children: [/* @__PURE__ */ jsx("div", {
					className: "co-node co-node-left",
					children: /* @__PURE__ */ jsxs("div", {
						className: "co-node-content co-counter-ccw-fast",
						children: [/* @__PURE__ */ jsx("div", {
							className: "co-icon-box",
							children: /* @__PURE__ */ jsx(FileText, { size: 20 })
						}), /* @__PURE__ */ jsx("span", {
							className: "co-label",
							children: "CONTENT"
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "co-node co-node-right",
					children: /* @__PURE__ */ jsxs("div", {
						className: "co-node-content co-counter-ccw-fast",
						children: [/* @__PURE__ */ jsx("div", {
							className: "co-icon-box",
							children: /* @__PURE__ */ jsx(MonitorSmartphone, { size: 20 })
						}), /* @__PURE__ */ jsx("span", {
							className: "co-label",
							children: "DIGITAL"
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "co-center-element",
				children: /* @__PURE__ */ jsx("span", {
					className: "co-center-text",
					children: "sBLOOM"
				})
			})
		]
	});
};
//#endregion
//#region src/pages/CreativeWorkspacePage.tsx
var CreativeWorkspacePage = () => {
	const scrollToRoles = () => {
		const rolesSection = document.getElementById("roles");
		if (rolesSection) rolesSection.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "cw-page",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "cw-hero",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container cw-hero-grid",
					children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "cw-eyebrow-wrap",
								children: [/* @__PURE__ */ jsx("span", {
									className: "cw-eyebrow",
									children: "CREATIVE WORKSPACE"
								}), /* @__PURE__ */ jsx("span", { className: "cw-eyebrow-line" })]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "cw-hero-title",
								children: [
									"Build your career",
									/* @__PURE__ */ jsx("br", {}),
									"with ",
									/* @__PURE__ */ jsx("span", {
										className: "cw-gold-text",
										children: "sBLOOM."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "cw-hero-lead",
								children: "Join a team that helps expertise-led businesses grow online."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "cw-hero-desc",
								children: "We're always looking for curious, creative and driven people who want to work on real projects, learn continuously and make an impact."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "cw-hero-actions",
								children: [/* @__PURE__ */ jsxs("button", {
									onClick: scrollToRoles,
									className: "cw-btn-primary",
									children: [/* @__PURE__ */ jsx("span", { children: "View Open Positions" }), /* @__PURE__ */ jsx(ArrowRight, {
										size: 18,
										strokeWidth: 2.2,
										className: "cw-btn-arrow"
									})]
								}), /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "cw-btn-secondary",
									children: "Apply Now"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "cw-hero-features-bar",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "cw-feature-badge",
										children: [/* @__PURE__ */ jsx(Users, {
											size: 18,
											strokeWidth: 1.8,
											className: "cw-feature-icon"
										}), /* @__PURE__ */ jsx("span", { children: "Meaningful Work" })]
									}),
									/* @__PURE__ */ jsx("div", { className: "cw-feature-divider" }),
									/* @__PURE__ */ jsxs("div", {
										className: "cw-feature-badge",
										children: [/* @__PURE__ */ jsx(TrendingUp, {
											size: 18,
											strokeWidth: 1.8,
											className: "cw-feature-icon"
										}), /* @__PURE__ */ jsx("span", { children: "Learn & Grow" })]
									}),
									/* @__PURE__ */ jsx("div", { className: "cw-feature-divider" }),
									/* @__PURE__ */ jsxs("div", {
										className: "cw-feature-badge",
										children: [/* @__PURE__ */ jsx(Sparkles, {
											size: 18,
											strokeWidth: 1.8,
											className: "cw-feature-icon"
										}), /* @__PURE__ */ jsx("span", { children: "Creative Environment" })]
									}),
									/* @__PURE__ */ jsx("div", { className: "cw-feature-divider" }),
									/* @__PURE__ */ jsxs("div", {
										className: "cw-feature-badge",
										children: [/* @__PURE__ */ jsx(Laptop, {
											size: 18,
											strokeWidth: 1.8,
											className: "cw-feature-icon"
										}), /* @__PURE__ */ jsx("span", { children: "Work on Live Projects" })]
									})
								]
							})
						]
					}) }), /* @__PURE__ */ jsx("div", {
						className: "cw-visual",
						style: { zIndex: 10 },
						children: /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 200,
							className: "w-full h-full",
							style: {
								position: "relative",
								width: "100%",
								height: "100%"
							},
							children: /* @__PURE__ */ jsx(CreativeOrbit, {})
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "collaboration-process",
				className: "cw-process-section",
				children: [/* @__PURE__ */ jsx("div", { className: "cw-radial-highlight" }), /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("div", {
						className: "cw-section-header",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 100,
							children: [/* @__PURE__ */ jsx("h2", { children: "How We Work Together" }), /* @__PURE__ */ jsx("p", { children: "A clear process from project brief to final delivery." })]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "cw-process-grid",
						children: [
							/* @__PURE__ */ jsx("div", { className: "cw-process-line" }),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-process-card",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "cw-process-bg-num",
											children: "01"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "cw-process-header",
											children: [/* @__PURE__ */ jsx(Target, {
												className: "cw-process-icon",
												size: 28
											}), /* @__PURE__ */ jsx("h3", { children: "S-Bloom Strategy" })]
										}),
										/* @__PURE__ */ jsx("p", { children: "We secure the client and prepare the brief, script, or technical requirements." })
									]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 300,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-process-card",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "cw-process-bg-num",
											children: "02"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "cw-process-header",
											children: [/* @__PURE__ */ jsx(PlayCircle, {
												className: "cw-process-icon",
												size: 28
											}), /* @__PURE__ */ jsx("h3", { children: "Partner Execution" })]
										}),
										/* @__PURE__ */ jsx("p", { children: "You take on the assigned project and deliver your specialized work." })
									]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 400,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-process-card",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "cw-process-bg-num",
											children: "03"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "cw-process-header",
											children: [/* @__PURE__ */ jsx(Rocket, {
												className: "cw-process-icon",
												size: 28
											}), /* @__PURE__ */ jsx("h3", { children: "S-Bloom Deployment" })]
										}),
										/* @__PURE__ */ jsx("p", { children: "We coordinate final deployment, campaign management, and client feedback." })
									]
								})
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "roles",
				className: "cw-roles-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("div", {
						className: "cw-section-header",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 100,
							children: [/* @__PURE__ */ jsx("h2", { children: "Your Expertise Has a Place Here" }), /* @__PURE__ */ jsx("p", { children: "We collaborate with skilled professionals across creative, content, and digital disciplines." })]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "cw-roles-grid",
						children: [
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 200,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-role-card",
									children: [/* @__PURE__ */ jsx(Film, {
										className: "cw-role-icon",
										size: 32
									}), /* @__PURE__ */ jsx("h3", { children: "Video Editors" })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 300,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-role-card",
									children: [/* @__PURE__ */ jsx(Camera, {
										className: "cw-role-icon",
										size: 32
									}), /* @__PURE__ */ jsx("h3", { children: "Videographers" })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 400,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-role-card",
									children: [/* @__PURE__ */ jsx(PenTool, {
										className: "cw-role-icon",
										size: 32
									}), /* @__PURE__ */ jsx("h3", { children: "Designers" })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 500,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-role-card",
									children: [/* @__PURE__ */ jsx(FileText, {
										className: "cw-role-icon",
										size: 32
									}), /* @__PURE__ */ jsx("h3", { children: "Content Writers" })]
								})
							}),
							/* @__PURE__ */ jsx(ScrollReveal, {
								delay: 600,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-role-card",
									children: [/* @__PURE__ */ jsx(MonitorSmartphone, {
										className: "cw-role-icon",
										size: 32
									}), /* @__PURE__ */ jsx("h3", { children: "Digital Specialists" })]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cw-cta-section",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 100,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "Ready to Collaborate with S-Bloom?" }),
							/* @__PURE__ */ jsx("p", { children: "Bring your skills, experience, and ideas to projects that need your expertise." }),
							/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "cw-btn",
								style: {
									padding: "16px 40px",
									fontSize: "1.1rem"
								},
								children: "Talk to S-Bloom"
							})
						]
					})
				})
			})
		]
	});
};
//#endregion
//#region src/routes/creative-workspace.tsx
var creative_workspace_exports = /* @__PURE__ */ __exportAll({
	default: () => creative_workspace_default,
	meta: () => meta$1
});
var meta$1 = () => {
	return [
		{ title: "Creative Workspace | sBLOOM" },
		{
			name: "description",
			content: "Inside our creative process and workspace."
		},
		{
			property: "og:title",
			content: "Creative Workspace | sBLOOM"
		},
		{
			property: "og:description",
			content: "Inside our creative process and workspace."
		}
	];
};
var creative_workspace_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(CreativeWorkspacePage, {});
});
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
//#endregion
//#region src/pages/ContactPage.tsx
var ContactPage = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		organization: "",
		email: "",
		phone: "",
		industry: "",
		improve: ""
	});
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitted(true);
		}, 600);
	};
	const handleReset = () => {
		setSubmitted(false);
		setFormData({
			fullName: "",
			organization: "",
			email: "",
			phone: "",
			industry: "",
			improve: ""
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "contact-page-wrapper",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "contact-bg-backdrop",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ jsx("img", {
				src: "/contact-silk-gold-bg.png",
				alt: "",
				className: "contact-bg-image"
			}), /* @__PURE__ */ jsx("div", { className: "contact-bg-light-tint" })]
		}), /* @__PURE__ */ jsx("div", {
			className: "contact-master-container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "contact-split-grid",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "contact-left-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "contact-eyebrow",
							children: [/* @__PURE__ */ jsx("span", {
								className: "contact-eyebrow-text",
								children: "GET IN TOUCH"
							}), /* @__PURE__ */ jsx("span", { className: "contact-eyebrow-line" })]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "contact-hero-title",
							children: [
								"Let’s discuss",
								/* @__PURE__ */ jsx("br", {}),
								"your digital",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "title-gold-text",
									children: "growth."
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "contact-hero-desc",
							children: "Tell us about your organization and what you are trying to achieve. We'll help you identify the right opportunities and next steps."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "contact-process-list",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "contact-process-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "contact-process-badge",
										children: /* @__PURE__ */ jsx(MessageSquare, {
											size: 18,
											strokeWidth: 1.8
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "contact-process-content",
										children: [/* @__PURE__ */ jsx("h4", {
											className: "contact-process-title",
											children: "Understand"
										}), /* @__PURE__ */ jsx("p", {
											className: "contact-process-text",
											children: "We listen to your goals and challenges."
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "contact-process-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "contact-process-badge",
										children: /* @__PURE__ */ jsx(Lightbulb, {
											size: 18,
											strokeWidth: 1.8
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "contact-process-content",
										children: [/* @__PURE__ */ jsx("h4", {
											className: "contact-process-title",
											children: "Strategize"
										}), /* @__PURE__ */ jsx("p", {
											className: "contact-process-text",
											children: "We identify the right opportunities."
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "contact-process-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "contact-process-badge",
										children: /* @__PURE__ */ jsx(BarChart3, {
											size: 18,
											strokeWidth: 1.8
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "contact-process-content",
										children: [/* @__PURE__ */ jsx("h4", {
											className: "contact-process-title",
											children: "Grow Together"
										}), /* @__PURE__ */ jsx("p", {
											className: "contact-process-text",
											children: "We build a clear plan for measurable results."
										})]
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "contact-right-col",
					children: /* @__PURE__ */ jsxs("div", {
						className: "contact-card",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "contact-card-badge",
								children: [
									/* @__PURE__ */ jsx("span", { className: "contact-card-badge-dot" }),
									/* @__PURE__ */ jsx("span", {
										className: "contact-card-badge-text",
										children: "CONTACT sBLOOM"
									}),
									/* @__PURE__ */ jsx("span", { className: "contact-card-badge-line" })
								]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "contact-card-title",
								children: "Share a few details"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "contact-card-subtitle",
								children: "We'll get back to you with the right next steps."
							}),
							submitted ? /* @__PURE__ */ jsxs("div", {
								className: "contact-success-card",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "contact-success-icon-wrap",
										children: /* @__PURE__ */ jsx(CheckCircle2, {
											size: 32,
											strokeWidth: 2
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "contact-success-title",
										children: "Message Received!"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "contact-success-msg",
										children: "Thank you for reaching out. We have received your details and our team will get back to you with tailored strategic recommendations within 24 hours."
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										className: "contact-reset-btn",
										onClick: handleReset,
										children: "Send Another Response"
									})
								]
							}) : /* @__PURE__ */ jsxs("form", {
								className: "contact-form",
								onSubmit: handleSubmit,
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "fullName",
											className: "contact-field-label",
											children: ["Full Name ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(User, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												id: "fullName",
												name: "fullName",
												required: true,
												placeholder: "Enter your full name",
												className: "contact-input",
												value: formData.fullName,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "organization",
											className: "contact-field-label",
											children: ["Organization Name ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(Building2, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												id: "organization",
												name: "organization",
												required: true,
												placeholder: "Enter your organization name",
												className: "contact-input",
												value: formData.organization,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "email",
											className: "contact-field-label",
											children: ["Email Address ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(Mail, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "email",
												id: "email",
												name: "email",
												required: true,
												placeholder: "you@company.com",
												className: "contact-input",
												value: formData.email,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "phone",
											className: "contact-field-label",
											children: ["Phone Number ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(Phone, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "tel",
												id: "phone",
												name: "phone",
												required: true,
												placeholder: "+91 98765 43210",
												className: "contact-input",
												value: formData.phone,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "industry",
											className: "contact-field-label",
											children: ["Industry ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(LayoutGrid, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsxs("select", {
												id: "industry",
												name: "industry",
												required: true,
												className: "contact-select",
												value: formData.industry,
												onChange: handleChange,
												children: [
													/* @__PURE__ */ jsx("option", {
														value: "",
														children: "Select an industry..."
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Education",
														children: "Education"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Healthcare",
														children: "Healthcare"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Consulting & Professional Services",
														children: "Consulting & Professional Services"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Technology & Software",
														children: "Technology & Software"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "E-Commerce & Retail",
														children: "E-Commerce & Retail"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Financial Services",
														children: "Financial Services"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Other",
														children: "Other"
													})
												]
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "improve",
											className: "contact-field-label",
											children: ["What would you like to improve? ", /* @__PURE__ */ jsx("span", {
												className: "contact-opt-tag",
												children: "(Optional)"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap contact-textarea-wrap",
											children: [/* @__PURE__ */ jsx(FileText, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon contact-textarea-icon"
											}), /* @__PURE__ */ jsx("textarea", {
												id: "improve",
												name: "improve",
												rows: 2,
												placeholder: "Tell us about your goals, challenges, or what you'd like to improve...",
												className: "contact-textarea",
												value: formData.improve,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("button", {
										type: "submit",
										className: "contact-submit-btn",
										disabled: isSubmitting,
										children: [/* @__PURE__ */ jsx("span", { children: isSubmitting ? "Planning Next Step..." : "Plan My Next Step" }), /* @__PURE__ */ jsx(ArrowRight, {
											size: 15,
											strokeWidth: 2.4,
											className: "btn-arrow-icon"
										})]
									})
								]
							})
						]
					})
				})]
			})
		})]
	});
};
//#endregion
//#region src/routes/contact.tsx
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => contact_default,
	meta: () => meta
});
var meta = () => {
	return [
		{ title: "Contact sBLOOM | Let's Talk" },
		{
			name: "description",
			content: "Get in touch to discuss your digital growth goals."
		},
		{
			property: "og:title",
			content: "Contact sBLOOM | Let's Talk"
		},
		{
			property: "og:description",
			content: "Get in touch to discuss your digital growth goals."
		}
	];
};
var contact_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(ContactPage, {});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-CQj_wNyt.js",
		"imports": ["/assets/jsx-runtime-BHANhu7e.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-D2PA7fMm.js",
			"imports": [
				"/assets/jsx-runtime-BHANhu7e.js",
				"/assets/arrow-right-We32XTf0.js",
				"/assets/camera-DFlvwyjA.js",
				"/assets/proxy-2z8OEwB7.js",
				"/assets/phone-OfcaQyEJ.js"
			],
			"css": ["/assets/root-__OHG7lq.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-nl8wYsfO.js",
			"imports": [
				"/assets/jsx-runtime-BHANhu7e.js",
				"/assets/arrow-right-We32XTf0.js",
				"/assets/camera-DFlvwyjA.js",
				"/assets/check-B3QaiORv.js",
				"/assets/file-text-C2cXeDTY.js",
				"/assets/film-BhO0SBg_.js",
				"/assets/proxy-2z8OEwB7.js",
				"/assets/ScrollReveal-Dh9yN8p5.js"
			],
			"css": ["/assets/home-B_n4jYOw.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/education": {
			"id": "routes/education",
			"parentId": "root",
			"path": "industries/education",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/education-BrOYc295.js",
			"imports": [
				"/assets/jsx-runtime-BHANhu7e.js",
				"/assets/arrow-right-We32XTf0.js",
				"/assets/circle-check-CCXuOjDp.js",
				"/assets/check-B3QaiORv.js",
				"/assets/trending-up-ty446-cJ.js",
				"/assets/ScrollReveal-Dh9yN8p5.js"
			],
			"css": ["/assets/education-so6YjTNq.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/healthcare": {
			"id": "routes/healthcare",
			"parentId": "root",
			"path": "industries/healthcare",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/healthcare-y1OnR84q.js",
			"imports": ["/assets/jsx-runtime-BHANhu7e.js", "/assets/ScrollReveal-Dh9yN8p5.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/professional-services": {
			"id": "routes/professional-services",
			"parentId": "root",
			"path": "industries/professional-services",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/professional-services-Dl4Dvq-2.js",
			"imports": ["/assets/jsx-runtime-BHANhu7e.js", "/assets/ScrollReveal-Dh9yN8p5.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/solutions": {
			"id": "routes/solutions",
			"parentId": "root",
			"path": "solutions",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/solutions-Dw5wopZc.js",
			"imports": ["/assets/jsx-runtime-BHANhu7e.js", "/assets/ScrollReveal-Dh9yN8p5.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/build": {
			"id": "routes/build",
			"parentId": "root",
			"path": "solutions/build",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/build-BpqyAL8s.js",
			"imports": ["/assets/jsx-runtime-BHANhu7e.js", "/assets/ScrollReveal-Dh9yN8p5.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/create": {
			"id": "routes/create",
			"parentId": "root",
			"path": "solutions/create",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/create-DG_yOscR.js",
			"imports": ["/assets/jsx-runtime-BHANhu7e.js", "/assets/ScrollReveal-Dh9yN8p5.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/promote": {
			"id": "routes/promote",
			"parentId": "root",
			"path": "solutions/promote",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/promote-Ca1fhaWg.js",
			"imports": ["/assets/jsx-runtime-BHANhu7e.js", "/assets/ScrollReveal-Dh9yN8p5.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/about": {
			"id": "routes/about",
			"parentId": "root",
			"path": "about",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/about-Cw6NUqS9.js",
			"imports": ["/assets/jsx-runtime-BHANhu7e.js", "/assets/ScrollReveal-Dh9yN8p5.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/how-it-works": {
			"id": "routes/how-it-works",
			"parentId": "root",
			"path": "how-it-works",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/how-it-works-beujm97M.js",
			"imports": ["/assets/jsx-runtime-BHANhu7e.js", "/assets/ScrollReveal-Dh9yN8p5.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/creative-workspace": {
			"id": "routes/creative-workspace",
			"parentId": "root",
			"path": "creative-workspace",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/creative-workspace-IdNcVbT5.js",
			"imports": [
				"/assets/jsx-runtime-BHANhu7e.js",
				"/assets/arrow-right-We32XTf0.js",
				"/assets/camera-DFlvwyjA.js",
				"/assets/file-text-C2cXeDTY.js",
				"/assets/film-BhO0SBg_.js",
				"/assets/trending-up-ty446-cJ.js",
				"/assets/ScrollReveal-Dh9yN8p5.js"
			],
			"css": ["/assets/creative-workspace-B3xJ1GNi.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/contact": {
			"id": "routes/contact",
			"parentId": "root",
			"path": "contact",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/contact-HYGjSy55.js",
			"imports": [
				"/assets/jsx-runtime-BHANhu7e.js",
				"/assets/arrow-right-We32XTf0.js",
				"/assets/circle-check-CCXuOjDp.js",
				"/assets/file-text-C2cXeDTY.js",
				"/assets/phone-OfcaQyEJ.js"
			],
			"css": ["/assets/contact-CoDvOEga.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-420175b5.js",
	"version": "420175b5",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": false,
	"v8_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [
	"/",
	"/solutions",
	"/solutions/build",
	"/solutions/create",
	"/solutions/promote",
	"/industries/education",
	"/industries/healthcare",
	"/industries/professional-services",
	"/about",
	"/contact",
	"/creative-workspace",
	"/how-it-works"
];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/education": {
		id: "routes/education",
		parentId: "root",
		path: "industries/education",
		index: void 0,
		caseSensitive: void 0,
		module: education_exports
	},
	"routes/healthcare": {
		id: "routes/healthcare",
		parentId: "root",
		path: "industries/healthcare",
		index: void 0,
		caseSensitive: void 0,
		module: healthcare_exports
	},
	"routes/professional-services": {
		id: "routes/professional-services",
		parentId: "root",
		path: "industries/professional-services",
		index: void 0,
		caseSensitive: void 0,
		module: professional_services_exports
	},
	"routes/solutions": {
		id: "routes/solutions",
		parentId: "root",
		path: "solutions",
		index: void 0,
		caseSensitive: void 0,
		module: solutions_exports
	},
	"routes/build": {
		id: "routes/build",
		parentId: "root",
		path: "solutions/build",
		index: void 0,
		caseSensitive: void 0,
		module: build_exports
	},
	"routes/create": {
		id: "routes/create",
		parentId: "root",
		path: "solutions/create",
		index: void 0,
		caseSensitive: void 0,
		module: create_exports
	},
	"routes/promote": {
		id: "routes/promote",
		parentId: "root",
		path: "solutions/promote",
		index: void 0,
		caseSensitive: void 0,
		module: promote_exports
	},
	"routes/about": {
		id: "routes/about",
		parentId: "root",
		path: "about",
		index: void 0,
		caseSensitive: void 0,
		module: about_exports
	},
	"routes/how-it-works": {
		id: "routes/how-it-works",
		parentId: "root",
		path: "how-it-works",
		index: void 0,
		caseSensitive: void 0,
		module: how_it_works_exports
	},
	"routes/creative-workspace": {
		id: "routes/creative-workspace",
		parentId: "root",
		path: "creative-workspace",
		index: void 0,
		caseSensitive: void 0,
		module: creative_workspace_exports
	},
	"routes/contact": {
		id: "routes/contact",
		parentId: "root",
		path: "contact",
		index: void 0,
		caseSensitive: void 0,
		module: contact_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
