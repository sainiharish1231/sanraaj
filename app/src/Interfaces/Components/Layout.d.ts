export type Child = false | JSX.Element | null | "";

export interface ILayout {
  children: Child | Child[],
  className?: string;
}

export interface IDetailsLayout extends ILayout {
  title: string;
}
