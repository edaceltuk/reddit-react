import React, { useContext, useState } from "react";

import { ORDER_STATUSES } from "../../constants";
import { PostContext, Post } from "../../Providers/PostProvider";
import { paginationData } from "../../helper";

import Pagination from "../../components/Pagination";
import PostElement from "../../components/PostElement/PostElement";
import Modal, { ModalData } from "../../components/Modal/Modal";
import Select from "../../components/Select/Select";
import RouteButton from "../../components/RouteButton/RouteButton";

import "./list.sass";

const List = () => {
  const { posts, orderedPosts } = useContext(PostContext);
  const [orderBy, setOrderBy] = useState<Number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalData, setModalData] = useState<ModalData>({ name: "", url: "" });
  const [showModal, setShowModal] = useState<Boolean>(false);
  const { paginatedData, totalPageCount } = paginationData(orderedPosts(posts, orderBy), currentPage)
  
  return (
    <div className="list">
      <div className="post-list" data-testid="post-list">
        <RouteButton />
        <Select setOrderBy={setOrderBy} />
        {paginatedData.map((post: Post, index) => {
          return (
            <PostElement
              key={index}
              header={post.name}
              url={post.url}
              vote={post.vote}
              setModalData={setModalData}
              setShowModal={setShowModal}
            />
          );
        })}
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPageCount={totalPageCount}

        ></Pagination>
      </div>

      {showModal && <Modal data={modalData} setModalData={setModalData} setShowModal={setShowModal} />}
    </div>
  );
};

export default List;
