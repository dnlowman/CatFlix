using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace CatFlix.Posts
{
	public class PostRepository
	{
		private const string CONNECTION_STRING = "mongodb://localhost:27017";
		private MongoClient client = new MongoClient(CONNECTION_STRING);

		public async Task Create(Post post)
		{
			var database = client.GetDatabase("CatFlix");
			var collection = database.GetCollection<Post>("Post");

			await collection.InsertOneAsync(post);
		}

		public async Task<IEnumerable<Post>> Get()
		{
			var database = client.GetDatabase("CatFlix");
			var collection = database.GetCollection<Post>("Post");
			return await collection.Find(_ => true).ToListAsync();
		}
	}
}