import type { Schema, Attribute } from "@strapi/strapi";

export interface OtherFourthwall extends Schema.Component {
  collectionName: "components_other_fourthwalls";
  info: {
    displayName: "Fourthwall";
    icon: "handHeart";
    description: "";
  };
  attributes: {
    title: Attribute.String;
    imageUrl: Attribute.String;
    Price: Attribute.Decimal;
    Link: Attribute.String;
    Description: Attribute.String;
    theImage: Attribute.Media;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: "components_shared_buttons";
  info: {
    displayName: "button";
    icon: "folder";
    description: "";
  };
  attributes: {
    variant: Attribute.Enumeration<
      ["default", "destructive", "outline", "secondary", "ghost", "link"]
    > &
      Attribute.Required &
      Attribute.DefaultTo<"default">;
    size: Attribute.Enumeration<["default", "sm", "lg", "icon"]> &
      Attribute.Required &
      Attribute.DefaultTo<"default">;
    icon: Attribute.String;
    link: Attribute.Component<"shared.link">;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: "components_shared_links";
  info: {
    displayName: "link";
    icon: "attachment";
  };
  attributes: {
    url: Attribute.String;
    title: Attribute.String;
    target: Attribute.Enumeration<["_blank"]>;
    external: Attribute.Boolean;
  };
}

export interface SharedMenuLink extends Schema.Component {
  collectionName: "components_shared_menu_links";
  info: {
    displayName: "MenuLink";
    icon: "attachment";
  };
  attributes: {
    url: Attribute.String;
    title: Attribute.String;
    target: Attribute.Enumeration<["_blank"]>;
    external: Attribute.Boolean;
  };
}

export interface SocialMediaDiscord extends Schema.Component {
  collectionName: "components_social_media_discords";
  info: {
    displayName: "Discord";
    description: "";
  };
  attributes: {
    bot_token: Attribute.String;
    guild_id: Attribute.String;
    channel_id: Attribute.String;
    channel_name: Attribute.String;
    widget_url: Attribute.String;
    buttonLink: Attribute.Component<"shared.button", true>;
    sideImage: Attribute.Media;
  };
}

export interface SocialMediaInstagram extends Schema.Component {
  collectionName: "components_social_media_instagrams";
  info: {
    displayName: "Instagram";
  };
  attributes: {
    api_client_id: Attribute.String;
    api_client_secret: Attribute.String;
    api_redirect_uri: Attribute.String;
    api_access_token: Attribute.String;
    last_updated: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    buttonLink: Attribute.Component<"shared.button", true>;
  };
}

export interface SocialMediaPatreon extends Schema.Component {
  collectionName: "components_social_media_patreons";
  info: {
    displayName: "Patreon";
  };
  attributes: {
    client_id: Attribute.String;
    client_secret: Attribute.String;
    redirect_uri: Attribute.String;
    access_token: Attribute.String;
    refresh_token: Attribute.String;
    last_updated: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    campaign_id: Attribute.String;
    buttonLink: Attribute.Component<"shared.button", true>;
    sideImage: Attribute.Media;
  };
}

export interface SocialMediaReddit extends Schema.Component {
  collectionName: "components_social_media_reddits";
  info: {
    displayName: "Reddit";
  };
  attributes: {
    subreddit: Attribute.String;
    buttonLink: Attribute.Component<"shared.button", true>;
    sideImage: Attribute.Media;
  };
}

export interface SocialMediaSoundcloudConfig extends Schema.Component {
  collectionName: "components_social_media_soundcloud_configs";
  info: {
    displayName: "SoundcloudConfig";
  };
  attributes: {
    buttonLink: Attribute.Component<"shared.button", true>;
  };
}

export interface SocialMediaSoundcloud extends Schema.Component {
  collectionName: "components_social_media_soundclouds";
  info: {
    displayName: "Soundcloud";
  };
  attributes: {
    media_url: Attribute.String;
    buttonLink: Attribute.Component<"shared.button", true>;
  };
}

export interface SocialMediaTiktok extends Schema.Component {
  collectionName: "components_social_media_tiktoks";
  info: {
    displayName: "Tiktok";
  };
  attributes: {
    profile: Attribute.String;
    video_id: Attribute.String;
    video_creator: Attribute.String;
    buttonLink: Attribute.Component<"shared.button", true>;
  };
}

export interface SocialMediaTwitch extends Schema.Component {
  collectionName: "components_social_media_twitches";
  info: {
    displayName: "Twitch";
    icon: "cast";
  };
  attributes: {
    channel_handle: Attribute.String;
    highlighted_playlist: Attribute.String;
    buttonLink: Attribute.Component<"shared.button", true>;
    sideImage: Attribute.Media;
  };
}

export interface SocialMediaTwitter extends Schema.Component {
  collectionName: "components_social_media_twitters";
  info: {
    displayName: "Twitter";
  };
  attributes: {
    profile: Attribute.String;
    dark_mode: Attribute.Boolean & Attribute.DefaultTo<false>;
    widget_height: Attribute.Integer & Attribute.DefaultTo<800>;
    buttonLink: Attribute.Component<"shared.button", true>;
    sideImage: Attribute.Media;
  };
}

export interface SocialMediaYoutube extends Schema.Component {
  collectionName: "components_social_media_youtubes";
  info: {
    displayName: "Youtube";
  };
  attributes: {
    channel_id: Attribute.String;
    playlist_id: Attribute.String;
    buttonLink: Attribute.Component<"shared.button", true>;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "other.fourthwall": OtherFourthwall;
      "shared.button": SharedButton;
      "shared.link": SharedLink;
      "shared.menu-link": SharedMenuLink;
      "social-media.discord": SocialMediaDiscord;
      "social-media.instagram": SocialMediaInstagram;
      "social-media.patreon": SocialMediaPatreon;
      "social-media.reddit": SocialMediaReddit;
      "social-media.soundcloud-config": SocialMediaSoundcloudConfig;
      "social-media.soundcloud": SocialMediaSoundcloud;
      "social-media.tiktok": SocialMediaTiktok;
      "social-media.twitch": SocialMediaTwitch;
      "social-media.twitter": SocialMediaTwitter;
      "social-media.youtube": SocialMediaYoutube;
    }
  }
}
