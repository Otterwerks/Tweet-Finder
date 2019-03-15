import redis
import json
from redis_password import redis_host, redis_port, redis_password

#This script clears the cached Tweets for Otterwerks Tweet Finder

def clear_redis():
    try:
        r = redis.StrictRedis(host=redis_host, port=redis_port, password=redis_password, decode_responses=True)
        r.delete("from:mightycarmods_time")
        r.delete("from:Raspberry_Pi_time")
        r.delete("from:playhearthstone_time")
        r.delete("from:MarkKnopfler_time")
        r.delete("from:jabrils__time")
        r.delete("from:mightycarmods")
        r.delete("from:Raspberry_Pi")
        r.delete("from:playhearthstone")
        r.delete("from:MarkKnopfler")
        r.delete("from:jabrils_")
    except Exception as e:
        print(e)

if __name__ == '__main__':
    clear_redis()