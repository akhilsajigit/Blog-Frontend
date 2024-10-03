import React from 'react'

function AddBlog() {
  return (
    <div>
        <h1>Blogs</h1>
        ______________
        <div class="container">
          <div class="row">
            <div className=''>
              <div className='col-8 border-3 rounded shadow p-4'>
              <h2>Add New Blogs</h2>
              <form>
                <div className='mb-3 d-flex gap-1 m-10'>
                  <div className='w-50'>
                    <label htmlFor=''>Title</label>
                    <input type='text' className='form-control mb-4' />
                  </div>

                  <div className='w-50'>
                    <label htmlFor=''>Description</label>
                    <input type='text' className='form-control mb-4' />
                  </div>
                  
                  <div className='w-50'>
                    <label htmlFor=''>Image </label>
                    <input type='file' className='form-control' />
                  </div>

                  <div className='w-50'>
                    <label htmlFor=''>Tags</label>
                    <input type='text' className='form-control' />
                  </div>

                </div>
              </form>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default AddBlog
