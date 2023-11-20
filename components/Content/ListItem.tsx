"use client";

const ListItem = ({ title, content }: { title: string; content: string }) => (
  <li className="flex flex-col gap-2">
    <h4 className="text-blue-100 text-xl">{title}</h4>
    <p className="text-grey-700">{content}</p>
  </li>
);


export default ListItem;