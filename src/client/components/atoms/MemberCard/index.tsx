import { motion } from "framer-motion";
import * as React from "react";
import { injectIntl } from "react-intl";
import styles from "./membercard.module.scss";
import { Language } from "client/utils/constants";
import { LocalizedLink } from "client/components/atoms/locales/LocalizedLink";
import { Image } from "client/components/atoms/Image";
import { MemberNameKey } from "server/actors/Members/constants/memberName";

interface MemberCardProps {
  image: string;
  nameKey: string;
  name: {
    lastName: string;
    firstName: string;
    lastNameEn: string;
    firstNameEn: string;
  };
  highlightBgColor?: string;
  highlightTextColor?: string;
  isCenter?: boolean;
  intl: any;
}

export const MemberCard = injectIntl(
  ({
    image,
    nameKey,
    name,
    intl: { locale },
    highlightBgColor,
    highlightTextColor,
    isCenter,
  }: MemberCardProps) => {
    const nameText = React.useMemo(
      () =>
        locale === Language.En
          ? name.lastNameEn + " " + name.firstNameEn
          : name.lastName + " " + name.firstName,
      [locale, name]
    );

    const containerVariants = React.useMemo(
      () =>
        highlightBgColor
          ? {
              hover: {
                scale: 1.08,
                backgroundColor: highlightBgColor,
              },
            }
          : {
              hover: {
                scale: 1.08,
              },
            },
      [highlightBgColor]
    );

    const textVariants = React.useMemo(
      () =>
        highlightTextColor
          ? {
              hover: {
                color: highlightTextColor,
              },
            }
          : undefined,
      [highlightTextColor]
    );

    if (nameKey !== MemberNameKey.KojimaHaruna) {
      return (
        <LocalizedLink to={`/members/${nameKey}`} className={styles.link}>
          <motion.div
            whileHover="hover"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            style={isCenter ? { backgroundColor: "#e887a3" } : undefined}
            className={styles.container}
          >
            <div className={styles.imageContainer}>
              <div className={styles.wrapper}>
                <Image
                  src={image}
                  alt={nameText}
                  objectFit="cover"
                  objectPosition="top"
                  className={styles.image}
                />
              </div>
            </div>
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.3 }}
              style={isCenter ? { color: "#ffffff" } : undefined}
              className={styles.name}
            >
              <span>{nameText}</span>
            </motion.div>
          </motion.div>
        </LocalizedLink>
      );
    } else {
      return (
        <div
          style={isCenter ? { backgroundColor: "#e887a3" } : undefined}
          className={styles.container}
        >
          <div className={styles.imageContainer}>
            <div className={styles.wrapper}>
              <Image
                src={image}
                alt={nameText}
                objectFit="cover"
                objectPosition="top"
                className={styles.image}
              />
            </div>
          </div>
          <div
            style={isCenter ? { color: "#ffffff" } : undefined}
            className={styles.name}
          >
            <span>{nameText}</span>
          </div>
        </div>
      );
    }
  }
);
