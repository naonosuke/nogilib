import * as React from "react";
import { animated, useSpring, useTransition } from "react-spring";
import { Link } from "gatsby";
import { parse } from "query-string";
import { Artwork } from "components/atoms/Artwork";
import { Layout } from "components/templates/Layout";
import { PageTab, TabItem } from "components/atoms/PageTab";
import styles from "./cds.module.scss";

interface CdsProps {
  query: string;
  singles: {
    edges: {
      node: {
        title: string;
        number: string;
        artworks: {
          medium: string;
        }[];
      };
    }[];
  };
  albums: {
    edges: {
      node: {
        title: string;
        number: string;
        artworks: {
          medium: string;
        }[];
      };
    }[];
  };
}

const pageTabItems: TabItem[] = [
  {
    link: "/cds/?page=singles",
    page: "singles",
    name: "Singles",
  },
  {
    link: "/cds/?page=albums",
    page: "albums",
    name: "Albums",
  },
];

export const Cds = (props: CdsProps) => {
  const singles = props.singles.edges;
  const albums = props.albums.edges;

  const { page } = React.useMemo(() => parse(props.query), [props.query]);

  const pageIndex = React.useMemo(() => {
    switch (page) {
      case "albums":
        return 1;
      default:
        return 0;
    }
  }, [page]);

  const transitionItems: {
    cds: CdsProps["singles"]["edges"] | CdsProps["albums"]["edges"];
    key: "singles" | "albums";
  }[] = [{ cds: singles, key: "singles" }, { cds: albums, key: "albums" }];

  const cdsTransition = useTransition(
    transitionItems[pageIndex],
    transitionItems => transitionItems.key,
    {
      from: { opacity: 0, transform: "translateY(200px)" },
      enter: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(100px)" },
    }
  );

  return (
    <div className={styles.wrapper}>
      <nav>
        <PageTab items={pageTabItems} selectedItem={page as string} />
      </nav>
      <main>
        {cdsTransition.map(({ item, key, props: transition }) => {
          return (
            <animated.div style={transition} key={key} className={styles.grid}>
              {item.cds.map(({ node }) => (
                <Link
                  to={`/${item.key}/${node.number}`}
                  key={node.number}
                  className={styles.artwork}
                >
                  <Artwork src={node.artworks[0].medium} title={node.title} />
                </Link>
              ))}
            </animated.div>
          );
        })}
      </main>
    </div>
  );
};
