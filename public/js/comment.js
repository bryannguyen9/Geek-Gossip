const commentForm = document.querySelector('.comment-form');

const postComment = async (comment_text, post_id) => {
  const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({ post_id, comment_text }),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.ok;
};

const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.pathname.split('/').pop();

  if (!comment_text) return;

  const isSuccess = await postComment(comment_text, post_id);

  if (isSuccess) document.location.reload();
  else alert('An error occurred.');
};

commentForm.addEventListener('submit', commentFormHandler);