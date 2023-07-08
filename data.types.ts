export interface DeliverooData {
    meta:             Meta;
    layoutGroups:     LayoutGroup[];
    header:           Header;
    items:            Item[];
    layoutNavigation: LayoutNavigation[];
}

export interface Header {
    title:                 string;
    layoutId:              string;
    image:                 HeaderImage;
    headerTags:            HeaderTags;
    headerInfoRows:        HeaderInfoRow[];
    banners:               any[];
    favouritesOverlay:     null;
    showFulfillmentRowCta: boolean;
}

export interface HeaderInfoRow {
    key:        string;
    image:      HeaderInfoRowImage;
    lines:      HeaderInfoRowLine[];
    target:     Target;
    badge:      null;
    uiTooltip:  UITooltip | null;
    trackingId: string;
}

export interface HeaderInfoRowImage {
    typeName: string;
    name:     string;
    size:     Size;
    color:    Color;
}

export interface Color {
    red:   number;
    green: number;
    blue:  number;
    hex:   string;
    name:  Name | null;
}

export enum Name {
    Primary = "PRIMARY",
    Secondary = "SECONDARY",
    Success = "SUCCESS",
    Tertiary = "TERTIARY",
}

export enum Size {
    Medium = "MEDIUM",
    Small = "SMALL",
}

export interface HeaderInfoRowLine {
    typeName: string;
    key:      string;
    align:    string;
    spans:    PurpleSpan[];
}

export interface PurpleSpan {
    typeName:   SpanTypeName;
    key:        string;
    text:       string;
    size:       Size;
    trackingId: null;
    target:     null;
    color:      Color;
    isBold:     boolean;
}

export enum SpanTypeName {
    UISpanIcon = "UISpanIcon",
    UISpanSpacer = "UISpanSpacer",
    UISpanText = "UISpanText",
}

export interface Target {
    typeName: string;
    params:   null;
    action:   string;
    layoutId: null | string;
}

export interface UITooltip {
    key:                  string;
    text:                 string;
    defaultOpenThreshold: number;
    trackingId:           string;
    sessionReset:         boolean;
}

export interface HeaderTags {
    trackingId: string;
    lines:      ItemRatingElement[];
}

export interface ItemRatingElement {
    typeName: string;
    key:      string;
    align:    string;
    spans:    ItemRatingSpan[];
}

export interface ItemRatingSpan {
    typeName:     SpanTypeName;
    key:          string;
    text?:        string;
    size?:        Size;
    trackingId?:  null;
    target?:      null;
    color?:       Color;
    isBold?:      boolean;
    width?:       Width;
    icon?:        Icon;
    iconTooltip?: null;
}

export interface Icon {
    name:  string;
    size:  Size;
    color: Color;
}

export enum Width {
    XSmall = "X_SMALL",
}

export interface HeaderImage {
    typeName: ImageTypeName;
    altText:  string;
    url:      string;
    type:     Type;
}

export enum Type {
    Remote = "REMOTE",
}

export enum ImageTypeName {
    Image = "Image",
}

export interface Item {
    id:                   string;
    uid:                  number;
    categoryId:           string;
    name:                 string;
    description:          null | string;
    productMeta:          null;
    productMetaShort:     null;
    productInformation:   string;
    dietaryInformation:   null;
    allergyDescription:   any[];
    nutritionalInfo:      null;
    price:                Price;
    priceDiscounted:      null;
    inStorePrice:         boolean;
    offerText:            null;
    image:                HeaderImage | null;
    popular:              boolean;
    available:            boolean;
    maxSelection:         null;
    modifierGroupIds:     string[];
    isSignatureExclusive: boolean;
    itemRating:           ItemRatingElement | null;
    favouritesOverlay:    null;
    restrictions:         any[];
    banner:               null;
    isSponsored:          boolean;
    trackingProperties:   null;
}

export interface Price {
    code:       Code;
    fractional: number;
    formatted:  string;
}

export enum Code {
    Eur = "EUR",
}

export interface LayoutGroup {
    id:      string;
    header:  null | string;
    layouts: Layout[];
}

export interface Layout {
    key:       string;
    header:    null | string;
    subheader: null | string;
}

export interface LayoutNavigation {
    label:    string;
    layoutId: string;
}

export interface Meta {
    metatags:         Metatags;
    restaurant:       Restaurant;
    customerLocation: CustomerLocation;
    categories:       Category[];
}

export interface Category {
    id:   string;
    name: string;
}

export interface CustomerLocation {
    lat:          number;
    lon:          number;
    city:         string;
    neighborhood: string;
    postcode:     string;
    cityId:       number;
    zoneId:       number;
    geohash:      string;
}

export interface Metatags {
    title:             string;
    titleSocial:       string;
    description:       string;
    descriptionSocial: string;
    image:             string;
    imageWidth:        number;
    imageHeight:       number;
}

export interface Restaurant {
    id:                         string;
    name:                       string;
    hasOrderNotes:              boolean;
    tipMessage:                 null;
    menuDisabled:               boolean;
    testSite:                   boolean;
    deliversToCustomerLocation: boolean;
    menuId:                     string;
    drnId:                      string;
    currencyCode:               Code;
    currencySymbol:             string;
    branchType:                 string;
    location:                   Location;
    links:                      Links;
}

export interface Links {
    self: Self;
}

export interface Self {
    href: string;
}

export interface Location {
    cityId:  number;
    zoneId:  number;
    address: Address;
}

export interface Address {
    address1:     string;
    postCode:     null;
    neighborhood: string;
    city:         string;
    country:      string;
}
