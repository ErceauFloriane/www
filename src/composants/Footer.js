import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const Footer = ({
  title = "template.data.gouv.fr",
  links = [
    {
      href: "https://www.data.gouv.fr/reference",
      title: "Données de référence",
    },
    {
      href: "https://www.data.gouv.fr/terms",
      title: "Conditions générales d'utilisation !",
    },
    {
      href: "https://www.data.gouv.fr/api",
      title: "API",
    },
  ],
  style,
  children,
}) => (
  <footer className="footer" style={style}>
    <div className="container">
      <div className="footer__logo">
        Une fabrique numérique propulsée par{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://beta.gouv.fr"
        >
          beta.gouv.fr
        </a>{" "}
        et la DSI des ministères sociaux. :)
        <ul className="footer__social">
          <li>
            <a href="https://github.com/SocialGouv" title="GitHub">
              <svg className="icon icon-github">
                <use xlinkHref="#icon-github" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="mailto:DSI-incubateur@sg.social.gouv.fr"
              title="Nous écrire un mail"
            >
              <svg className="icon icon-mail">
                <use xlinkHref="#icon-mail" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <ul className="footer__links">
        <li>
          <h2>{title}</h2>
        </li>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>{link.title}</a>
            </Link>
          </li>
        ))}
        <li>
          <a
            href="/declaration-accessibilite"
            title="déclaration d'accessibilité"
          >
            Accessibilité : non conforme
          </a>
        </li>
      </ul>
      <ul className="footer__links" />
    </div>
    <div>{children}</div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  links: PropTypes.arrayOf(
    PropTypes.exact({
      href: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Footer;
