import clsx from "clsx";

import InfoTooltip from "@/components/common/InfoTooltip";

import { SOCIALS } from "@/logic/constants/socials";

import styles from "./style.module.scss";

export default function SocialsList({ className, isLight = false }) {
  return (
    <ul className={clsx(styles.socials, className, isLight && styles.isLight)}>
      {SOCIALS.map((item) => (
        <li key={item.provider}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            title={item.provider}
            aria-label={item.provider}
          >
            <img
              src={`/img/svg/icons/socials/cypher-${item.provider}.svg`}
              alt={item.provider}
              loading="lazy"
              decoding="async"
            />
          </a>
          {item.provider === "x" && <SocialsDropdown type="x" />}
          {item.provider === "telegram" && <SocialsDropdown type="tg" />}
        </li>
      ))}
    </ul>
  );
}

const SocialsDropdown = ({ type = "" }) => {
  const xSocials = [
    { name: "Community", href: "https://x.com/Zero1_Community" },
    { name: "Ecosystem", href: "https://x.com/Zero1_Ecosystem" },
    { name: "Turkey", href: "https://twitter.com/zero1_turkey" },
    { name: "Nigeria", href: "https://twitter.com/zero1nigeria" },
    {
      name: "Russian Speaking Community",
      href: "https://x.com/zero1community",
    },
    { name: "India", href: "https://twitter.com/zero1_india" },
    { name: "Spain", href: "https://twitter.com/zero1spain" },
    { name: "Ukraine", href: "https://twitter.com/zero1ukraine" },
    { name: "China", href: "https://twitter.com/zero1china" },
    { name: "France", href: "https://twitter.com/zero1france" },
    { name: "Vietnam", href: "https://twitter.com/zero1vietnam" },
    { name: "Indonesia", href: "https://twitter.com/zero1indonesia" },
    { name: "Philippines", href: "https://twitter.com/Zero1filipinos" },
  ];

  const tgSocials = [
    { name: "India", href: "https://t.me/zero1_india" },
    { name: "Vietnam", href: "https://t.me/zero1_vietnam" },
    { name: "Indonesia", href: "https://t.me/zero1_indonesia" },
    { name: "France", href: "https://t.me/zero1_france" },
    { name: "Spain", href: "https://t.me/zero1_spain" },
    { name: "Philippines", href: "https://t.me/Zero1_Philippines" },
  ];

  switch (type) {
    case "x":
      return (
        <InfoTooltip id="footer-socials-x" icon={<IconArrow />} openOnClick>
          <ul>
            {xSocials.map((item, idx) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener">
                  {item.name}
                  <IconLink />
                </a>
              </li>
            ))}
          </ul>
        </InfoTooltip>
      );
    case "tg":
      return (
        <InfoTooltip id="footer-socials-tg" icon={<IconArrow />} openOnClick>
          <ul>
            {tgSocials.map((item, idx) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener">
                  {item.name}
                  <IconLink />
                </a>
              </li>
            ))}
          </ul>
        </InfoTooltip>
      );
  }
};

const IconLink = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 10 10"
    fill="#55F89F"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H10V10H8.83268L8.83268 2.91829H7.08171V1.16731H0V0Z" />
    <path d="M5.33074 4.66926V2.91829H7.08171V4.66926H5.33074Z" />
    <path d="M3.57977 6.42023V4.66926H5.33074V6.42023H3.57977Z" />
    <path d="M1.82879 8.17121H3.57977V6.42023H1.82879V8.17121Z" />
    <path d="M1.82879 8.17121V9.92218H0.0778208V8.17121L1.82879 8.17121Z" />
  </svg>
);

const IconArrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="#55F89F"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      transform="scale(1, -1) translate(0, -24)"
      d="M17 14C14.5013 11.5006 12.0014 9 12.0014 9L7 13.9996"
    />
  </svg>
);
