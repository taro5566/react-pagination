import React from "react";
import AlbumList from "./AlbumList";
import Album from "./type";
import "./Pagination.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";

type props = {
  albums: Album[];
};

const Pagination = (props: props) => {
  const { albums } = props;

  const itemsPerPage = 6; //表示したい任意の数字

  const [itemsOffset, setItemsOffset] = useState(0); //ページの最初の数字を設定

  const endOffset = itemsOffset + itemsPerPage; //ページの最後の数字を設定

  const currentAlbums = albums.slice(itemsOffset, endOffset); //sliceで切り取り

  //albumの数と表示したい数字で割って整数にした数がページ数
  const pageCount = Math.ceil(albums.length / itemsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    //selectedはクリックした数字の-1した数字
    const newOffset = (e.selected * itemsPerPage) % albums.length; //×6からalbumの総数で割った余りが次のページの最初の数字になる
    setItemsOffset(newOffset);
  };

  return (
    <div className="albumWrapper">
      <AlbumList albums={albums} currentAlbums={currentAlbums} />
      <div className="pagenateWrapper">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          onClick={handlePageClick}
        />
      </div>
    </div>
  );
};

export default Pagination;
