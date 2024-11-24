export interface INavItem {
	title: string;
	link?: string;
	isRoot?: boolean;
	children?: INavItem[];
}