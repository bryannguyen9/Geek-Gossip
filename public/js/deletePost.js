const deletePostBtn = document.querySelector('.delete-post-btn');

const deletePost = async (postId) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ post_id: postId }),
  });
  return response.ok;
};

const deleteFormHandler = async (event) => {
  event.preventDefault();

  const postId = window.location.toString().split('/').pop();

  const isSuccess = await deletePost(postId);

  if (isSuccess) {
    document.location.replace('/dashboard/');
  } else {
    alert('Failed to delete the post.');
  }
};

deletePostBtn.addEventListener('click', deleteFormHandler);