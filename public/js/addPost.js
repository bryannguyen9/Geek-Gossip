const newPostForm = document.querySelector('.new-post-form');
const titleInput = document.querySelector('input[name="post-title"]');
const contentInput = document.querySelector('input[name="post-content"]');

const createNewPost = async (title, post_content) => {
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({ title, post_content }),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.ok;
};

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const post_content = contentInput.value.trim();

  if (!title || !post_content) return;

  const isSuccess = await createNewPost(title, post_content);

  if (isSuccess) document.location.replace('/dashboard');
  else alert('An error occurred.');
};

newPostForm.addEventListener('submit', newFormHandler);