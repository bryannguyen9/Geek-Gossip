const editFormHandler = async (event) => {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;
  
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, post_content }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        throw new Error('Failed to update post.');
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);