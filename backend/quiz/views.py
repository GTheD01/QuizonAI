import json
import os
import openai
from openai import OpenAI
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY", "")
)


class GenerateQuestionnaireView(GenericAPIView):
    permission_classes = [AllowAny,]

    def post(self, request, *args, **kwargs):
        topic = self.request.data["topic"]

        if not topic:
            return Response({"error": "Topic is required"}, status=status.HTTP_400_BAD_REQUEST)

        prompt = """
            on the topic {topic} can you give me 10 questions but return me in json object in the following format,
            make sure only the json object is inside nothing else, no extra text no quotes
            {{
                id: <incremental_int>,
                question: <question_content>,
                incorrect_answers: answers[],
                correct_answer: <answer>
            }}
        """.format(topic=topic)

        try:
            response = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            )

            response_text = response.choices[0].message.content
            questions = json.loads(response_text)

            return Response({"questions": questions}, status=status.HTTP_200_OK)
        except openai.OpenAIError as e:
            return Response({"error": f"OpenAI API error: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)