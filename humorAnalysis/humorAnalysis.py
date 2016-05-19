import json
from pprint import pprint

from datetime import datetime

from sets import Set


i = 0

'''
Set up basic data.

'''
with open("../dumps/sat10am/pagelog.json", "r") as ins:
  pages = []  
  no_data_pages = [] # mysteriously, some pages have data: []. I am logging them here, I will investigate them later.
  no_user_id_page = [] #mysteriously, the same happened with user_id
  for line in ins:
    jsonLine = json.loads(line)
    
    user_id = jsonLine["user_id"]
    page_data_array = jsonLine["data"]
    #pprint(page_data_array)
    if len(page_data_array) == 0:
      no_data_pages.append(jsonLine)
    elif user_id == None:      
      no_user_id_page.append(jsonLine)
    else:  
      first_page_data_elt = page_data_array[0]
      template = first_page_data_elt["template"]    
      pages.append(jsonLine)

    i += 1
  template_names = Set([elt["data"][0]["template"] for elt in pages])  

def display_basic_counts():
  print ''
  print 'display_basic_counts'
  print 'total lines: ', i
  print 'pages: ', len(pages)
  print 'no_data_pages: ', len(no_data_pages)
  print 'no_user_id_page: ', len(no_user_id_page)
  print 'num templates: ', len(template_names)
  #for template_name in template_names: print template_name
  print ''


def investigate_no_data_pages():
  print 'number of no_data_pages: ', len(no_data_pages)
  
  unique_user_ids = Set([page["user_id"] for page in no_data_pages])
  print "num unique no_data user ids",len(unique_user_ids) #23 (not 27)
  # i can only think it's some bullshit thing to do with entering an early page?
  #maybe I just had it submit stuff? 
  for page in no_data_pages:
    #print page
    print page["user_id"]
  #most have user id's.
  #I suppose I could check which user_id's actually get used in the final thing,
  # 27 is a a werid number
  # it's 9*3 

#investigate_no_data_pages()

def fix_no_user_id_page(display):
  if display: print 'number of no_user_id_pages: ', len(no_user_id_page)
  for page in no_user_id_page:
    #there are 9 entries in the no_user_id_page list
    #they all have different templates, leading me to believe it is one user
    #there is sensible human data in each of them
    #the two templates they are missing are consent and rate, leading me to beleive it was an early user
    #maybe evan or katie, who I told to do the survey in survey monkey.
    #either way, I feel justified in putting these data back into the pages list
    #and removing them from
    pages.append(page)
    if display:
      print page["data"][0]["template"]
      if page["data"][0]["template"] == "prewrite":
        pass
        pprint(page["data"])
  del no_user_id_page[:]
  

fix_no_user_id_page(display=False)


'''
Page Analysis
* pagelog_aggregated_by_type / template
'''

def count_and_display_unique_user_pages(display): 
  pagelog_aggregated_by_type = {} 
  for page in pages:
    user_id = page["user_id"]
    page_data_array = page["data"]
    first_page_data_elt = page_data_array[0]
    template = first_page_data_elt["template"]
    #print template, user_id  
    
    #insert
    if template in pagelog_aggregated_by_type:
      pagelog_aggregated_by_type[template].append(page)
    else:
      pagelog_aggregated_by_type[template] = [page]
    
  #print the number of entries for each template
  #this excludes blank data[] submissions and submissions with no user_id
  if display:
    print ''
    print 'count_and_display_unique_user_pages'
    for key in pagelog_aggregated_by_type:
      pages_for_key = pagelog_aggregated_by_type[key]
      print len(pages_for_key), ' submissions for ',key
    print ''
  return pagelog_aggregated_by_type


'''
1. "Rate" Page Analysis
* first check and get rid one duplicates (I only found one), create rate_pages

'''



def fix_rate_page_data_deduplicate_users(pagelog_aggregated_by_type, display):
  if display:
    print ''
    print 'rate_entry_unique_user'
  rating_pages = pagelog_aggregated_by_type["rate"]
  
  user_ids = [elt["user_id"] for elt in rating_pages]
  user_ids = sorted(user_ids)

  #print sorted user_ids to look for duplicates
  #for user_id in user_ids: print user_id
  
  #unique users
  user_ids_set = set(user_ids)
  if display:
    print 'len unique user_ids', len(user_ids_set)
  
  def investigate_id1():
    #only, they are only different in two places 6-2 and 4-1.
    #this is consistent with someone changing their answer and resubmitting
    #I'm not sure how that is possible, but... I'm justified in keeping on the later one.
    investigate_id = "RZMTe5L6nnjt2NHed"
    
    investigate_id_data = [elt for elt in rating_pages if elt["user_id"] == investigate_id]
    if display:  
      print len(investigate_id_data)
      pprint(investigate_id_data)
    
    #check if the submit times are substantially different:
    for elt in investigate_id_data: print elt["submit_time"],   datetime.fromtimestamp(float(elt["submit_time"])/1000)
    
    #check if the actual data entered is different
    
    data1 = investigate_id_data[0]["data"]
    data2 = investigate_id_data[1]["data"]
    if display:
      print len(data1), len(data2)
    
    #pprint(data1[16])
    #pprint(data2[16])
    
    def stringifyDataEntry(elt):
      return elt["exerciseId"]+" "+elt["exerciseType"]+" "+elt["template"]+" "+elt["value"]
    
    def flatten_data(d):
      return [stringifyDataEntry(elt) for elt in d]
      
    data1_flat = Set(flatten_data(data1))
    data2_flat = Set(flatten_data(data2))
    
    diff_data1_data2 = data1_flat.symmetric_difference(data2_flat)
    if display:
      print len(diff_data1_data2)
      print diff_data1_data2
   
  #investigate_id1()
  #as a result of investigate_id1, we get rid of the earlier submission by user
  # "RZMTe5L6nnjt2NHed"
  # time_stamp: 1444752809779
  rate_pages = [elt for elt in rating_pages if not ((elt['user_id'] == "RZMTe5L6nnjt2NHed") and (elt['submit_time'] == 1444752809779))]
  
  submit_times = [elt["submit_time"] for elt in rating_pages]
  submit_times = sorted(submit_times)  
  if display:
    for submit_time in submit_times: print datetime.fromtimestamp(float(submit_time)/1000)
  return rate_pages



def fix_prewrite_page_data_deduplicate_users(pagelog_aggregated_by_type, display):
  if display:
    print ''
    print 'fix_prewrite_page_data_deduplicate_users'
  prewrite_pages = pagelog_aggregated_by_type["prewrite"]
  
  user_ids = [elt["user_id"] for elt in prewrite_pages]
  user_ids = sorted(user_ids)

  #print sorted user_ids to look for duplicates
  for user_id in user_ids: print user_id
  
  #unique users
  user_ids_set = set(user_ids)
  print "unique users: ", len(user_ids_set)
  if display:
    print 'len unique user_ids', len(user_ids_set)
  
  pprint(prewrite_pages)
  
  def investigate_id1():
    #only, they are only different in two places 6-2 and 4-1.
    #this is consistent with someone changing their answer and resubmitting
    #I'm not sure how that is possible, but... I'm justified in keeping on the later one.
    investigate_id = "RZMTe5L6nnjt2NHed"
    
    investigate_id_data = [elt for elt in prewrite_pages if elt["user_id"] == investigate_id]
    if display:  
      print len(investigate_id_data)
      pprint(investigate_id_data)
    
    #check if the submit times are substantially different:
    for elt in investigate_id_data: print elt["submit_time"],   datetime.fromtimestamp(float(elt["submit_time"])/1000)
    
    #check if the actual data entered is different
    
    data1 = investigate_id_data[0]["data"]
    data2 = investigate_id_data[1]["data"]
    if display:
      print len(data1), len(data2)
    
    #pprint(data1[16])
    #pprint(data2[16])
    
    def stringifyDataEntry(elt):
      return elt["exerciseId"]+" "+elt["exerciseType"]+" "+elt["template"]+" "+elt["value"]
    
    def flatten_data(d):
      return [stringifyDataEntry(elt) for elt in d]
      
    data1_flat = Set(flatten_data(data1))
    data2_flat = Set(flatten_data(data2))
    
    diff_data1_data2 = data1_flat.symmetric_difference(data2_flat)
    if display:
      print len(diff_data1_data2)
      print diff_data1_data2
   
  #investigate_id1()
  
  #as a result of investigate_id1, we get rid of the earlier submission by user
  # "RZMTe5L6nnjt2NHed"
  # time_stamp: 1444752809779
  prewrite_pages = [elt for elt in prewrite_pages if not ((elt['user_id'] == "RZMTe5L6nnjt2NHed") and (elt['submit_time'] == 1444752809779))]
  
  submit_times = [elt["submit_time"] for elt in prewrite_pages]
  submit_times = sorted(submit_times)  
  '''
  if display:
    for submit_time in submit_times: print datetime.fromtimestamp(float(submit_time)/1000)
  '''
  return prewrite_pages



# Aggregate joke ratings by jokes
# are any of the jokes dirproportiaonlly funny?
# is there a pattern of increasing funniness? (like a warm-up effect?)

def aggregate_rate_page_by_joke(rate_pages, display):
  #print 'num rate_pages', len(rate_pages)
  #pprint(rate_pages[0]["data"])
  
  #establish array for counting joke ratings
  rate_counts = {} # {ratingExercises1: {response1: {yes; [], no: [], meh:}} }
  for i in range(1,9):
    key1 = "ratingExercises-"+`i`
    #print key1
    rate_counts[key1] = {}
    
    for j in range(1,4):
      key2 = 'response'+`j`
      #print key2
      default_count_dict = {'yes':[], 'no':[], 'meh':[]}
      rate_counts[key1][key2] = default_count_dict
  #pprint(rate_counts)
  
  #populate array with counts for joke rating
  for page in rate_pages:
    user_id = page["user_id"]
    data = page["data"]
    for datum in data:
      exerciseId = datum["exerciseId"] #ratingExercises-8
      exerciseType = datum["exerciseType"] # response3
      value = datum["value"] #no
      #insert data into rate_counts
      rate_counts[exerciseId][exerciseType][value].append(user_id)  
  return rate_counts

#analyze rates aggregated by joke
def analyze_rate_counts_by_joke(rate_counts, display):
  #We have 502 rates, and we expected 504, which is close. I found two responses that are missing a rating.
  #I don't know why. Probably the user skipped them and I wasn't checking for it. Oh well. No big deal
  # 62% 'yes' or 'meh'
  # 31% yes
  # 31% no
  #maybe that's why they give three jokes - one is bound to hit at that rate :)
  
  total_yeses = 0
  total_nos = 0
  total_mehs = 0
  
  for i in range(1,9):
    exerciseId = "ratingExercises-"+`i`
    for j in range(1,4):
      exerciseType = 'response'+`j`
      
      yes_count = len(rate_counts[exerciseId][exerciseType]["yes"])
      total_yeses += yes_count
      #print exerciseId, exerciseType, "yes", yes_count

      meh_count = len(rate_counts[exerciseId][exerciseType]["meh"])
      total_mehs += meh_count
      #print exerciseId, exerciseType, "meh", meh_count
      
      no_count = len(rate_counts[exerciseId][exerciseType]["no"])
      total_nos += no_count
      #print exerciseId, exerciseType, "no", no_count
      
      exerciseTypeTotal = yes_count + meh_count + no_count
      #print 'total: ', exerciseTypeTotal
      
      if display:
        print exerciseId, exerciseType, "yes", yes_count, "meh", meh_count, "no", no_count
        print ''
  
  if display:
    print "yes: ", total_yeses
    print "meh: ", total_mehs
    print "no:  ", total_nos
    
    print ''
    total = total_yeses + total_nos + total_mehs
    print 'total: ', (total)  
  
# aggregate/analyze onion ratings by user
# are any of the users finding the jokes disproportionately funny or not funny?
  
#Aggregate joke ratings by exercise
def aggregate_rate_page_by_user(rate_pages, display):
  
  user_ids = [elt['user_id'] for elt in rate_pages]
  print 'num user_ids:',len(user_ids)
  aggregate_by_user = {}
  for user_id in user_ids:
    aggregate_by_user[user_id] = {"yes": 0, "no": 0, "meh": 0}
  
  
  for page in rate_pages:    
    user_id = page["user_id"]
    data = page["data"]
    
    for datum in data:
      value = datum["value"]
      aggregate_by_user[user_id][value] += 1
    
  pprint(aggregate_by_user)
   

'''
Not sure what's going on here...
Analysing users? from the users.json database

'''

with open("../dumps/sat10am/users.json", "r") as ins:
  users = []  
  for line in ins:
    jsonLine = json.loads(line)
    users.append(jsonLine)    
  
def display_all_users(rating_pages, display):  
  #print email addresses and make sure they are all pSomethings
  #for user in users: print user["_id"], user["emails"][0]["address"]
  
  #correlate all the ratings user_ids with their emails  
  all_user_to_id = {}
  for user in users: all_user_to_id[user["_id"]] = user["emails"][0]["address"]

  rating_pages_user_ids = Set([elt["user_id"] for elt in rating_pages])
  if display:
    for rating_pages_user_id in rating_pages_user_ids:
      print rating_pages_user_id, all_user_to_id[rating_pages_user_id]


'''
Runninging stuff!
'''



display_basic_counts()

pagelog_aggregated_by_type = count_and_display_unique_user_pages(display = False)  
rate_pages = fix_rate_page_data_deduplicate_users(pagelog_aggregated_by_type, display = False)

'''
rate_counts_by_joke = aggregate_rate_page_by_joke(rate_pages, display = True) 
analyze_rate_counts_by_joke(rate_counts_by_joke, display = False)

rate_counts_by_user = aggregate_rate_page_by_user(rate_pages, display = True) 
analyze_rate_counts_by_user(rate_counts_by_user, display = True)

#display_all_users(rating_pages, display = False)
'''


#prewrite_pages = fix_prewrite_page_data_deduplicate_users(pagelog_aggregated_by_type, display = True)
prewrite_pages = pagelog_aggregated_by_type["prewrite"]

prewrite_data = []

for page in prewrite_pages:
  user_id = page["user_id"]
  page_data_array = page["data"]
  
  for index, entry  in enumerate(page_data_array):
    template = entry["template"]
    exerciseId = entry["exerciseId"]
    
    jokes = entry["value"]
    #users separated each joke by a spare line, 
    # to get the jokes out, I have to parse by \n charcters, and get rid of blank lines
    joke_array = jokes.split('\n')
    if len(joke_array) > 1:
      for joke in joke_array:
        if len(joke) > 0:
          #print len(joke), "joke:",joke
          joke_datum = {
            "joke": joke,
            "user_id": user_id,
            "exerciseId": exerciseId,
            "template": template            
          }
          prewrite_data.append(joke_datum)
    
    #prewrite_data.append(entry)
  
#pprint(prewrite_data)
print "len prewrite_data:", len(prewrite_data)
'''
 {'exerciseId': u'prewritingExercises-2',
  'joke': u"All I can say is, It's about time monkeys started earning their keep.",
  'template': u'prewrite',
  'user_id': u'RZMTe5L6nnjt2NHed'},
'''

def make_write_data():
  write_pages = pagelog_aggregated_by_type["write"]
  write_data = []
  
  for page in write_pages:
    user_id = page["user_id"]
    page_data_array = page["data"]
    
    for index, entry  in enumerate(page_data_array):
      template = entry["template"]
      exerciseId = entry["exerciseId"]
      
      exerciseType = entry["exerciseType"]
      joke = entry["value"]
      
      if exerciseType == "joke" or exerciseType == "joke":
        #print "joke: ",joke
        pass
        if not joke == "":
          #print joke
          joke_datum = {
            "joke": joke,
            "user_id": user_id,
            "exerciseId": exerciseId,
            "template": template            
          }
          write_data.append(joke_datum)    
  
  #pprint(write_data)
  print "len write_data:", len(write_data)    
  return write_data

write_data = make_write_data()
print "len write_data:", len(write_data) 

'''
Print out all the jokes so I can put them in Excel and read them

'''

write_data_joke_1 = [elt['joke'] for elt in write_data if elt['exerciseId'] == 'writingExercises-1']

write_data_joke_2 = [elt['joke'] for elt in write_data if elt['exerciseId'] == 'writingExercises-2']

write_data_joke_3 = [elt['joke'] for elt in write_data if elt['exerciseId'] == 'writingExercises-3']

#pprint(write_data_joke_3)


#pprint(prewrite_data)
prewrite_data_joke_1 = [elt['joke'] for elt in prewrite_data if elt['exerciseId'] == 'prewritingExercises-1']


prewrite_data_joke_2 = [elt['joke'] for elt in prewrite_data if elt['exerciseId'] == 'prewritingExercises-2']

prewrite_data_joke_3 = [elt['joke'] for elt in prewrite_data if elt['exerciseId'] == 'prewritingExercises-3']

#pprint(prewrite_data_joke_3)

'''
write_data_user_ids = [elt["user_id"] for elt in write_data]
write_data_user_ids = sorted(write_data_user_ids)

#print sorted user_ids to look for duplicates
for user_id in write_data_user_ids: print user_id

#unique users
write_data_user_ids_set = set(write_data_user_ids)

print "len: ", len(write_data_user_ids_set)
for user_id in write_data_user_ids_set: print user_id
'''

'''
Aggregate by user so I can try to compare whether the jokes before and after.
'''

write_data_user_ids = [elt["user_id"] for elt in write_data]
write_data_user_ids_set = set(write_data_user_ids)
pprint(write_data_user_ids_set)
print "len: ", len(write_data_user_ids_set)

#for each user id, I want to beable to see the before and after jokes.

user_aggregated_write_data = {}
for user_id in write_data_user_ids_set:
  user_aggregated_write_data[user_id]={
    "joke1": {
      "prewrites": [],
      "writes": [],
      #"writes-box": []
    },
    "joke2": {
      "prewrites": [],
      "writes": [],
      #"writes-box": []
    },
    "joke3": {
      "prewrites": [],
      "writes": [],
      #"writes-box": []
    },    
  }

 
for elt in write_data:
  user_id = elt["user_id"]
  exerciseId= elt["exerciseId"]
  joke = elt["joke"]
  
  jokeNum = ""
  if exerciseId == "writingExercises-1":
    jokeNum = "joke1"
  if exerciseId == "writingExercises-2":
    jokeNum = "joke2"
  if exerciseId == "writingExercises-3":
    jokeNum = "joke3" 
  
  print "write", user_id, jokeNum     
  user_aggregated_write_data[user_id][jokeNum]["writes"].append(joke)


for elt in prewrite_data:
  user_id = elt["user_id"]
  exerciseId= elt["exerciseId"]
  joke = elt["joke"]
  
  jokeNum = ""
  if exerciseId == "prewritingExercises-1":
    jokeNum = "joke1"
  if exerciseId == "prewritingExercises-2":
    jokeNum = "joke2"
  if exerciseId == "prewritingExercises-3":
    jokeNum = "joke3" 
  
  print "prewrite", user_id, jokeNum, joke
  if user_id in user_aggregated_write_data:    
    user_aggregated_write_data[user_id][jokeNum]["prewrites"].append(joke)


#pprint(user_aggregated_write_data)

x = [elt for elt in prewrite_data if elt["user_id"] == "JAyTExdMHA6mkv74k"]
#print "x"
#pprint(x)



'''
Users

'''
with open("../dumps/sat10am/users.json", "r") as ins:
  i = 0
  emails = []
  for line in ins:
    jsonLine = json.loads(line)
    #pprint(jsonLine)
    user_id = jsonLine["_id"]
    email = jsonLine["emails"][0]["address"]
    emails.append(email)
    print user_id, email
    i += 1
  print "len users: ", i
  emails = sorted(emails)
  pprint(emails)
  #print len(emails)
  