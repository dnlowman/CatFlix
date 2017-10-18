using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Threading.Tasks;

namespace CatFlix.Posts
{
	public class PostController : ApiController
    {
		private PostRepository repository = new PostRepository();

		public async Task<HttpResponseMessage> Get()
		{
			var posts = await repository.Get();
			return Request.CreateResponse(HttpStatusCode.OK, posts);
		}
		public async Task<HttpResponseMessage> Post(Post post)
		{
			await repository.Create(post);

			return Request.CreateResponse(HttpStatusCode.Created, post);
		}

		[Route("api/Post/{objectId}")]
		public async Task<HttpResponseMessage> Delete(string objectId)
		{
			await repository.Delete(objectId);

			return Request.CreateResponse(HttpStatusCode.OK, objectId);
		}

	}
}
