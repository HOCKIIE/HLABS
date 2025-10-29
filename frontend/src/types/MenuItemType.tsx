
export interface SubMenuItemType {
    name: string;
    href: string;
    key: string;
}
export interface MenuItemType {
    name:string;
    href:string;
    key: string;
    sub?: SubMenuItemType[]
}