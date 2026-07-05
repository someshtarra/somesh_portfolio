import json
import glob

# Read all transcripts
files = glob.glob("/Users/someswararaotarra/.gemini/antigravity/brain/*/.system_generated/logs/transcript_full.jsonl")
for f in files:
    with open(f, 'r') as fp:
        for line in fp:
            try:
                data = json.loads(line)
                if 'tool_calls' in data:
                    for call in data['tool_calls']:
                        if call.get('name') == 'write_to_file':
                            args = call.get('args', {})
                            target = args.get('TargetFile')
                            content = args.get('CodeContent')
                            if target and content and 'Desktop/koko/src/' in target:
                                print(f"Recovering {target}")
                                import os
                                os.makedirs(os.path.dirname(target), exist_ok=True)
                                with open(target, 'w') as out:
                                    out.write(content)
            except Exception as e:
                pass
