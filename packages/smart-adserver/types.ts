import { Package } from "frontity/types";

/**
 * Smart Adserver library.
 */
interface SAS {
  /**
   * The array of function callbacks that the SmartAdserver library uses
   * to make the ad calls.
   */
  cmd: Function[];

  /**
   * The setup function which initializes the ad manager.
   */
  setup?: (params: {
    /**
     * ID of the network (account) at Smart.
     */
    networkid: string;

    /**
     * Domain of the network (account) at Smart.
     */
    domain: string;

    /**
     * Specifies if the calls are done asynchronously.
     * Asynchronous calls are recommended.
     */
    async: boolean;
  }) => void;

  /**
   * The function which performs a specific ad call.
   */
  call?: (calltype: string, options: CallOptions) => void;
}

declare global {
  /**
   * Extend window with the Smart Adserver globals.
   */
  interface Window {
    /**
     * Smart Adserver library.
     */
    sas: SAS;
  }
}

/**
 * The options used for a particular ad call.
 *
 * All the possible options are visible in https://support.smartadserver.com/s/article/Tagging-guide.
 *
 */
export interface CallOptions {
  /**
   * Identifies the website; parent element of a page.
   */
  siteId: number;
  /**
   * Identifies the page on a website; child element of the website.
   */
  pageId: number;
  /**
   * Identifies the format (medium rectangle, skyscraper, etc.).
   */
  formatId: number;
  /**
   * The `id` of the container of the page that will contain the ad.
   */
  tagId?: string;
  /**
   * The width of the ad. Used in the calls of type `iframe`.
   */
  width?: number;
  /**
   * The height of the ad. Used in the calls of type `iframe`.
   */
  height?: number;
  /**
   * Used to pass keywords and key=value pairs.
   * See [Using keyword targeting](https://support.smartadserver.com/s/article/Using-keyword-targeting).
   */
  target?: number;
}

/**
 * Integration for Smart Adserver with Frontity.
 */
interface SmartAdserver extends Package {
  /**
   * Root elements exposed by this package.
   */
  roots: {
    /**
     * Smart Adserver root element.
     */
    smartAdserver: React.FC;
  };

  /**
   * State exposed by this package.
   */
  state: {
    /**
     * The smartAdserver namespace.
     */
    smartAdserver: {
      /**
       * Reference to window.sas that is used internally by the SmartAds library.
       */
      sas: SAS;

      /**
       * ID of the network (account) at Smart.
       */
      networkId?: string;

      /**
       * The subdomain of your network (account) at Smart.
       *
       * @example `"www", "www3"`
       */
      subdomain?: string;
    };

    /**
     * Fills.
     */
    fills: {
      /**
       * The smartAdserver namespace.
       */
      smartAdserver: {};
    };
  };

  /**
   * Libraries.
   */
  libraries: {
    /**
     * Fills.
     */
    fills: {
      /**
       * The smartAdserver namespace.
       */
      smartAdserver: {
        /**
         * The component that is used to render the ads.
         */
        SmartAd: React.FC;
      };
    };
  };
}

export default SmartAdserver;
